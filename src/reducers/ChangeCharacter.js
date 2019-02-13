import { CHANGE_CHARACTER } from '../actions';

const initialState = {character: 'cat'};

const ChangeCharacter = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_CHARACTER:
      return Object.assign(
        {},
        state,
        {character: action.character}
      )
    default:
      return initialState
  }
}

export default ChangeCharacter;