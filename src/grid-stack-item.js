import React from 'react'

export default class GridStackItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.children
  }
}

GridStackItem.propTypes = {
  autoPosition: React.PropTypes.bool,
  children: React.PropTypes.node,
  height: React.PropTypes.number,
  id: React.PropTypes.string.isRequired,
  maxHeight: React.PropTypes.number,
  maxWidth: React.PropTypes.number,
  minHeight: React.PropTypes.number,
  minWidth: React.PropTypes.number,
  onShouldUpdate: React.PropTypes.func,
  width: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number
}

GridStackItem.defaultProps = {
  onShouldUpdate: () => {return false}
}
