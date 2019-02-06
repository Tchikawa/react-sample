import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        < input onChange={this.props.onChange} value={this.props.text} />
      </div>
    )
  }
}

export default Input;