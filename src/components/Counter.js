import { increment, decrement, reset } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';
import Button from './Button';

class Counter extends Component {

  color = (n) => {
    if (10 <= n) {
      return { color: 'red' }
    } else if (-1 >= n) {
      return { color: 'blue' }
    }
  }

  render() {
    const counter = this.props.count.Counter;
    return (
      <div>
        <p style={this.color(counter)}>{counter}</p>
        <Button onClick={this.props.increment} text="increment" />
        <Button onClick={this.props.decrement} text="decrement" />
        <Button onClick={this.props.reset} text="reset" />
      </div>
    )
  }
}

const mapStateToProps = (count) => {
  return {
    count
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement, reset }, dispatch)
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Counter);
