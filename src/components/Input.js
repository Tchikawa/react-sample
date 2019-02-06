import { changeText } from '../actions'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.2/node_modules/redux';

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