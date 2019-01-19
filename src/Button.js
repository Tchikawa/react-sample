import React,{ Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.increment} >increment</button>
    )
  }
}

export default Button;