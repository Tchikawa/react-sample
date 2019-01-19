import React,{ Component } from 'react';

class DecrementButton extends Component {
  render() {
    return (
      <button onClick={this.props.decrement} >decrement</button>
    )
  }
}

export default DecrementButton;