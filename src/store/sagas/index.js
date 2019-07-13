import { all, takeLatest } from 'redux-saga/effects';
import { ProductsTypes } from '~/store/ducks/products';
import { loadCategorys, setProducts } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.LOAD_CATEGORYS, loadCategorys),
    takeLatest(ProductsTypes.SET_PRODUCTS, setProducts),
  ]);
}
