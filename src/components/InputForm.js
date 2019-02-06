import { connect } from 'react-redux';
import React from 'react';
import Input from './Input';
import Form from './Form';
import List from './List';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.2/node_modules/redux';
import { changeText, changeFormText, handleClickFormButton } from '../actions'

const InputForm = (state) => {

  const changeText = (e) => {
    state.changeText(e.target.value)
  }

  const changeFormText = (e) => {
    state.changeFormText(e.target.value)
  }

  const handleClickFormButton = () => {
    state.handleClickFormButton(
      state.items.concat(state.formText)
    )
  }

  return (
    <div>
      <p>{state.text}</p>
      <Input onChange={changeText} />
      <Form value={state.formText} onChange={changeFormText} onClick={handleClickFormButton} text='add' />
      <List items={state.items} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.InputForm.text,
    items: state.InputForm.items,
    formText: state.InputForm.formText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeText,
      changeFormText,
      handleClickFormButton
    }
    , dispatch
  )
}

//むやみにconnectしない方がいいらしい
//TODO:ここでいいの？
export default connect(
  mapStateToProps, mapDispatchToProps
)(InputForm)