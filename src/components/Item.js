import React, { Component } from 'react';

class Item extends Component {

  componentDidMount() {
    alert(this.props.text)
  }

  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}

export default Item;