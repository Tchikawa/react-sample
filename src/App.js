//{}なし:default export(1つのコンポーネントに1つだけ定義できる)どんな名前でもOK
//{}あり:exportした名前出ないととれない
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Input from './Input';
import Form from './Form';
import List from './List';
import Axios from 'axios';

class App extends Component {
  state = {
    count: 0,
    text: '',
    formText: '',
    items: [],
    zipCode: '',
    fullAddress: '',
    isLoading: false,
    errText: ''
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

  changeZipCode = (e) => {
    this.setState({ zipCode: e.target.value })
  }

  handleClickFormButton = () => {
    this.setState({
      items: this.state.items.concat(this.state.formText),
      formText: ''
    })
  }

  searchZipCode = () => {
    this.setState({ isLoading: true })
    Axios({
      method: 'GET',
      url: 'https://api.zipaddress.net/',
      params: { zipcode: this.state.zipCode }
    }).then((response) => {
      response.data.code === '200' ?
        this.setState({
          fullAddress: response.data.data.fullAddress,
          isLoading: false
        }) : this.setState({
          errText: response.data.message,
          isLoading: false
        })
    })
  }

  isvalidZipcode = () => {
    const regexp = /\d{7}/;
    regexp.test(this.state.zipCode) ? this.searchZipCode() : this.setState({ errText: '7桁の数字を入力してください。' })
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
        <Form value={this.state.formText} onChange={this.changeFormText} onClick={this.handleClickFormButton} text='add' />
        <List items={this.state.items} />
        {this.state.errText}
        <Form value={this.state.zipCode} onChange={this.changeZipCode} onClick={this.isvalidZipcode} text='search' />
        {this.state.isLoading ? 'Now Loading...' : this.state.fullAddress}
      </div>
    );
  }
}

export default App;
