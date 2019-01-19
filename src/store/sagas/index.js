import { all, takeLatest } from 'redux-saga/effects';

import { addCompany } from './companies';

export default function* rootSaga() {
  yield all([
    takeLatest('ADD_COMPANY_REQUEST', addCompany),
  ]);
}
