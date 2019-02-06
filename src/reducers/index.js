import { combineReducers } from 'redux'
import Counter from './Counter'
import SearchZipCode from './SearchZipCode'
import InputForm from './InputForm';


export default combineReducers({
  Counter,
  SearchZipCode,
  InputForm
})