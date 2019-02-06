import React, { Component } from 'react';
import checkPropTypes from 'prop-types';


class Button extends Component {
  render() {
    return (
      < button onClick={this.props.onClick} >{this.props.text}</button >
    )
  }
}

Button.checkPropTypes = {
  onClick: checkPropTypes.func.isRequired,
  text: checkPropTypes.number.isRequired
}

export default Button;