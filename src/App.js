//{}なし:デフォルトエクスポート(引数みたいなもの)どんな名前でもOK
//{}あり:その名前でないと取ってこれない
//jsはthisの役割がたくさんある
//react lifecycle http://qiita.com/kawachi/items/092bfc281f88e3a6e456
import React, { Component } from 'react';
import './App.css';
import Header from './Header';

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
    //thisの中のthis(::increment と同じ)
    this.increment = this.increment.bind(this)//バインドしてあげないとthis.がわからない
  }

  increment() {
    //直接値を変えてはいけないのでsetState
    this.setState({
      //呼び出し元が
      count: this.state.count + 1
    })
  }

  render() {
    return (
      //CSSなどのclassとjsのclassの名前がかぶるのでCSSなどのclassはclassNameという名前にする。
      //forもかぶるのでhtmlForになる。
      <div className="App">
        <Header title="WELCOME" />
        <p className="App-intro">
          {this.state.count}
        </p>
        <button onClick={this.increment} >increment</button>
      </div>
    );
  }
}

export default App;
