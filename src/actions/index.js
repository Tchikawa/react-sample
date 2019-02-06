/**
 * Storeに対して何かしたい場合はActionを発行する
 * ReducerがActionの発生を検知すると，Stateが更新される
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_FORM_TEXT = 'CHANGE_FORM_TEXT';
export const HANDLE_CLICK_FORM_BUTTON = 'HANDLE_CLICK_FORM_BUTTON';
export const CHANGE_ZIP_CODE = 'CHANGE_ZIP_CODE';
export const CHANGE_FULL_ADDRESS = 'CHANGE_FULL_ADDRESS';
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';
export const CHANGE_ERR_TEXT = 'CHANGE_ERR_TEXT';

export const increment = (count) => {
  return { type: INCREMENT, count }
}

export const decrement = (count) => {
  return { type: DECREMENT, count }
}

export const reset = () => {
  return { type: RESET }
}

export const changeText = (text) => {
  return { type: CHANGE_TEXT, text }
}

export const changeFormText = (formText) => {
  return { type: CHANGE_FORM_TEXT, formText }
}

export const handleClickFormButton = (items) => {
  return { type: HANDLE_CLICK_FORM_BUTTON, items }
}

export const changeZipCode = (zipCode) => {
  return { type: CHANGE_ZIP_CODE, zipCode }
}

export const changeFullAddress = (fullAddress) => {
  return { type: CHANGE_FULL_ADDRESS, fullAddress }
}

export const changeIsLoading = (isLoading) => {
  return { type: CHANGE_IS_LOADING, isLoading };
}

export const changeErrText = (errText) => {
  return { type: CHANGE_ERR_TEXT, errText }
}