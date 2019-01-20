import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input onChange={this.props.onChange} value={this.props.text} />
    )
  }
}

export default Input;