import {
  CHANGE_TEXT,
  CONVERT_TO_NUMBER,
  CHANGE_COUNT,
  CHANGE_FORM_TEXT,
  HANDLE_CLICK_FORM_BUTTON
} from '../actions';

const initialState = {
  text: '',
  formText: '',
  items: []
}

const InputForm = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return Object.assign(
        {},
        state,
        { text: action.text }
      )
    case CHANGE_FORM_TEXT:
      return Object.assign(
        {},
        state,
        { formText: action.formText }
      )
    case HANDLE_CLICK_FORM_BUTTON:
      return Object.assign(
        {},
        state,
        {
          items: action.items,
          formText: ''
        }
      )
    default:
      return state
  }
}

export default InputForm;