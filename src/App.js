//{}なし:デフォルトエクスポート(引数みたいなもの)どんな名前でもOK
//{}あり:その名前でないと取ってこれない
//jsはthisの役割がたくさんある
//react lifecycle http://qiita.com/kawachi/items/092bfc281f88e3a6e456
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';

class App extends Component {
  //名前決まってる newした時に呼ばれる関数
  constructor(props) {
    //this.で使えるようにマッピング
    //propsは他から使われる
    //stateは自分自身が操作する
    super(props)
    this.state = {
      count: 0
    }
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  increment = () => {
    this.setCount(1)
  }

  decrement = () => {
    this.setCount(-1)
  }

  setCount = (n) => {
    this.setState({
      count: this.state.count + n
    })
  }

  setColor = (n) => {
    if (10 <= n) {
      return { color: 'red' }
    } else if (-1 >= n) {
      return { color: 'blue' }
    }
  }

  render() {
    return (
      //CSSなどのclassとjsのclassの名前がかぶるのでCSSなどのclassはclassNameという名前にする。
      //forもかぶるのでhtmlForになる。
      <div className="App">
        <Header title="WELCOME" />
        <p className="App-intro" style={this.setColor(this.state.count)}>
          {this.state.count}
        </p>
        <Button onClick={this.increment} text="increment" />
        <Button onClick={this.decrement} text="decrement" />
        <Button onClick={this.reset} text="reset" />
      </div>
    );
  }
}

export default App;
