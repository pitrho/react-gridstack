# React-GridStack

Wrapper library for [GridStack](http://troolee.github.io/gridstack.js/).

## Installing

### NPM (preferred)

    npm install react-gridstack

### Browser

To use this package in the browser, clone this repo and run `gulp build`. Then,
copy the react-gridstack.min.js and react-gridstack.min.css files from the
`dist` directory and include them in your html head. Note that this files
include jQuery, jQuery-UI and lodash.

## Usage:
```js
import React from 'react'
import { GridStack, GridStackItem } from 'react-gridstack'

class MyGrid extends React.Component {
  render () {
    <GridStack cellHeight={50} verticalMargin={10}>
      <GridStackItem id="item_1" x={0} y={0} minHeight={2} minWidth={2}>
        First Item
      </GridStackItem>
      <GridStackItem id="item_2" x={0} y={2}>
        Second Item
      </GridStackItem>
    </GridStack>
  }
}
```

Make sure to include the css file in your bundle.

## Options

Aside from all the (options)[https://github.com/troolee/gridstack.js/tree/master/doc] accepted by
gridstack.js, the following props can be also passed to the components.

### GridStackItem options

 * onShouldUpdate(prevElement, newElement): Function to be called with the
 previous prop version and new prop version of the element. It must return
 `true` or `false` to indicate if the element should be re-rendered. Very
 similar in function to `shouldComponentUpdate` from react.

## Collaborate

See anything missing? Fork, implement and submit a pull request.

## License

See the license file.

## Contributors

* [Alejadnro Mesa](https://github.com/alejom99)
