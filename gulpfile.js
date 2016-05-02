const babel = require('gulp-babel')
const gulp = require('gulp')
const rimraf = require('rimraf')
const webpack = require('webpack-stream')

const lib = './lib'
const dist = './dist'

function runWebpack(prod) {
  const config = require('./webpack.config.js').genWebpack(prod)
  return gulp.src('src/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest(dist))
}

// Clear out distribution directory, make it if it does not exist.
gulp.task('clean', function (cb) {
  rimraf(lib + '/*', function () {
    rimraf(dist + '/*', cb)
  })
})

gulp.task('build-lib', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      plugins: [ 'transform-object-rest-spread' ],
      presets: [ 'es2015', 'stage-1', 'react' ]
    }))
    .pipe(gulp.dest(lib))
})

gulp.task('build-dist', function (cb) {
  runWebpack(false)
  runWebpack(true)

  if (cb) {
    cb()
  }
})

gulp.task('build', [ 'clean' ], function () {
  gulp.start('build-lib')
  gulp.start('build-dist')
})

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', [ 'build-lib', 'build-dist' ])
})
