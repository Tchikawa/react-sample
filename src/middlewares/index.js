import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import getFullAddress from '../services'
import { FULLADDRESS_FETCH_REQUESTED } from '../actions';

function* fetchFullAddress() {
  const zipCode = yield select((state) => { console.log(state.SearchZipCode.zipCode); return state.SearchZipCode.zipCode })
  //関数実行
  const { fullAddress, errText } = yield call(getFullAddress, zipCode);
  if (fullAddress) {
    // 実行が終わったらdispatchする
    yield put({ type: 'CHANGE_FULL_ADDRESS', fullAddress });
  } else {
    // 実行が終わったらdispatchする
    yield put({ type: 'CHANGE_ERR_TEXT', errText })
  }
}

// まとめる
export default function* rootSaga() {
  yield all([
    //actionを待ち受ける
    takeEvery(FULLADDRESS_FETCH_REQUESTED, fetchFullAddress)
  ])
}