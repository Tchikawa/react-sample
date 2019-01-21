//{}なし:default export(1つのコンポーネントに1つだけ定義できる)どんな名前でもOK
//{}あり:exportした名前出ないととれない
//
//react lifecycle http://qiita.com/kawachi/items/092bfc281f88e3a6e456
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Input from './Input';
import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    count: 0,
    text: '',
    formText: '',
    items: []
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

  changeFormText = (e) => {
    this.setState({ formText: e.target.value })
  }

  handleClickFormButton = () => {
    this.setState({
      items: this.state.items.concat(this.state.formText),
      formText: ''
    })
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
        <Form value={this.state.formText} onChange={this.changeFormText} onClick={this.handleClickFormButton} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
