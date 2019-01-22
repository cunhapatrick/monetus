import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addCompanySuccess } from '../actions/companies';

export function* addCompany(action) {

  let quoteData;
  let companyData;
  let chartData;
  let news;
  try{
    quoteData = yield call(api.get, `/${action.payload.companySymbol}/batch?types=quote`);
    companyData = yield call(api.get, `/${action.payload.companySymbol}/company`);
    chartData = yield call(api.get, `/${action.payload.companySymbol}/chart`);
    news = yield call(api.get, `/${action.payload.companySymbol}/news/last/1`);
  } catch (err){
    yield put(addCompanySuccess({status: err.response.status }));
    return false;
  }

  quoteData = quoteData.data.quote
  companyData = companyData.data
  chartData = chartData.data
  news = news.data

  const Data = {
    latestPrice: quoteData.latestPrice,
    name: companyData.companyName,
    website: companyData.website,
    ceo: companyData.CEO,
    symbol: companyData.symbol,
    chartData,
    news,
    status: 200
  };

  yield put(addCompanySuccess(Data));
}
