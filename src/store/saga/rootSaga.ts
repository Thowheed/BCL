import { all } from 'redux-saga/effects';
import { baclSaga } from './index';

function* rootSaga() {
  yield all([
    baclSaga()
  ]);
}

export default rootSaga;