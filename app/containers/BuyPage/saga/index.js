import { takeEvery, takeLatest } from 'redux-saga/effects';
// import takeFirst from '../../../utils/sagas/take-first';
import { LOAD_PRICES, LOAD_PRICE, LOAD_BUY_COIN } from '../constants';
import loadBuyCoinProcess from './load-buy-coin-process';
import loadPricesProcess, { loadPriceProcess } from './load-prices-process';

/**
 * Root saga manages watcher lifecycle
 */
export default function* buyData() {
  yield takeLatest(LOAD_PRICES, loadPricesProcess);
  yield takeEvery(LOAD_PRICE, loadPriceProcess);
  yield takeEvery(LOAD_BUY_COIN, loadBuyCoinProcess);
  // yield takeFirst(LOAD_BUY_COIN, loadBuyCoinProcess);
}
