import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addCompanySuccess } from '../actions/companies';

export function* addCompany(action) {
  const { data: quoteData } = yield call(api.get, `/${action.payload.companySymbol}/batch?types=quote`);
  const { data: companyData } = yield call(api.get, `/${action.payload.companySymbol}/company`);
  const { data: chartData } = yield call(api.get, `/${action.payload.companySymbol}/chart`);

  const Data = {
    latestPrice: quoteData.quote.latestPrice,
    name: companyData.companyName,
    website: companyData.website,
    ceo: companyData.CEO,
    symbol: companyData.symbol,
    chartData,
  };

  yield put(addCompanySuccess(Data));
}
