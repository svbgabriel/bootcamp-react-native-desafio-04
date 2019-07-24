import { all, takeLatest } from 'redux-saga/effects';
import { ProductsTypes } from '~/store/ducks/products';
import { CartTypes } from '~/store/ducks/cart';
import { loadCategorys, loadProducts, loadProduct } from './products';
import { removeProduct } from './cart';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.LOAD_CATEGORYS, loadCategorys),
    takeLatest(ProductsTypes.LOAD_PRODUCTS, loadProducts),
    takeLatest(ProductsTypes.LOAD_PRODUCT, loadProduct),
    takeLatest(CartTypes.REMOVE_PRODUCT, removeProduct),
  ]);
}
