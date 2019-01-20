//{}なし:デフォルトエクスポート(引数みたいなもの)どんな名前でもOK
//{}あり:その名前でないと取ってこれない
//jsはthisの役割がたくさんある
//react lifecycle http://qiita.com/kawachi/items/092bfc281f88e3a6e456
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Input from './Input';

class App extends Component {
  state = {
    count: 0,
    text: '',
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  increment = () => {
    this.setCount(this.comvertToNumber())
  }

  decrement = () => {
    this.setCount(-1 * this.comvertToNumber())
  }

  setCount = (n) => {
    this.setState({
      count: this.state.count + n
    })
  }

  color = (n) => {
    if (10 <= n) {
      return { color: 'red' }
    } else if (-1 >= n) {
      return { color: 'blue' }
    }
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  comvertToNumber = () => {
    const regexp = /^\d+$/;
    const { text } = this.state;
    return regexp.test(text) ? parseInt(text, 10) : 1
  }

  changeCount = () => {
    if (Number(this.state.text)) {
      this.increment = this.increment()
    }
  }

  render() {
    return (
      //CSSなどのclassとjsのclassの名前がかぶるのでCSSなどのclassはclassNameという名前にする。
      //forもかぶるのでhtmlForになる。
      <div className="App">
        <Header title="WELCOME" />
        <p className="App-intro" style={this.color(this.state.count)}>
          {this.state.count}
        </p>
        <Button onClick={this.increment} text="increment" />
        <Button onClick={this.decrement} text="decrement" />
        <Button onClick={this.reset} text="reset" />
        <p>{this.state.text}</p>
        <Input onChange={this.changeText} />
      </div>
    );
  }
}

export default App;
