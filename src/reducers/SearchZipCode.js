import { CHANGE_ZIP_CODE, CHANGE_FULL_ADDRESS, CHANGE_ERR_TEXT, CHANGE_IS_LOADING } from '../actions';

const initialState = {
  zipCode: '',
  errText: '',
  fullAddress: '',
  isLoading: false
}

const SearchZipCode = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FULL_ADDRESS:
      return Object.assign(
        {},
        state, {
          zipCode: initialState.zipCode,
          errText: initialState.errText,
          fullAddress: action.fullAddress,
          isLoading: initialState.isLoading
        })
    case CHANGE_ERR_TEXT:
      return Object.assign(
        {},
        state,
        {
          zipCode: initialState.zipCode,
          errText: action.errText,
          isLoading: initialState.isLoading,
          fullAddress: initialState.fullAddress
        }
      );
    case CHANGE_IS_LOADING:
      return Object.assign({}, state, { isLoading: true })
    case CHANGE_ZIP_CODE:
      return Object.assign({}, state, { zipCode: action.zipCode })
    default:
      return state
  }
}

export default SearchZipCode;