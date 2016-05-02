/* global __dirname, module */

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var genWebpack = function (prod) {
  var config = {
    context: __dirname,
    entry: {
      'react-gridstack': path.join(__dirname, 'src/index.js')
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: prod? '[name].min.js' : '[name].js',
      libraryTarget: 'umd',
      library: 'react-gridstack'
    },
    externals: {
      'react': {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React'
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM'
      }
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            plugins: [ 'transform-object-rest-spread' ],
            presets: [ 'react', 'stage-1', 'es2015' ]
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
      ]
    },
    resolve: {
      extensions: [ '', '.js' ]
    },
    plugins: [
      new ExtractTextPlugin(prod? '[name].min.css' : '[name].css'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(prod? 'production' : 'development')
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin()
    ]
  }
  if (prod) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))
  }
  return config
}

module.exports = {
  genWebpack: genWebpack
}
