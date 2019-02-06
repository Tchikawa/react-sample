
/**
 * Stateの初期状態はReducerのデフォルト引数で定義される
 * Stateを変更する際、渡されてきたstateそのものを書き換えずに新しいものを合成するように書く
 */
import { INCREMENT, DECREMENT, RESET } from '../actions'

const Counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return 0
    default:
      return state;
  }
}

export default Counter;