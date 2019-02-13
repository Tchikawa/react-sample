//{}なし:default export(1つのコンポーネントに1つだけ定義できる)どんな名前でもOK
//{}あり:exportした名前でないととれない
import React from 'react';
import '../App.css';
import Header from './Header';
import InputForm from './InputForm';
import Counter from './Counter'
import SearchZipCode from '../containers/SearchZipCode';
import ChangeCharacter from '../containers/ChangeCharacter';

export default function App() {
  return (
    <div className="App">
      <Header title="WELCOME" />
      <ChangeCharacter/>
      <Counter />
      <InputForm />
      <SearchZipCode />
    </div>
  )
}