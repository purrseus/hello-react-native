import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    /* fork(saga1), fork(saga2), fork(saga3) */
  ]);
}
