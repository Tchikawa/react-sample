import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <button onClick={this.props.onClick}>add</button>
      </div>
    )
  }
}

export default Form;