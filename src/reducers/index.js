import { combineReducers } from 'redux'
import Counter from './Counter'
import SearchZipCode from './SearchZipCode'
import InputForm from './InputForm';
import ChangeCharacter from './ChangeCharacter'

export default combineReducers({
  Counter,
  SearchZipCode,
  InputForm,
  ChangeCharacter
})