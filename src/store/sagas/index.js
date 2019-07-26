import { all, takeLatest } from 'redux-saga/effects';
import { ProductsTypes } from '~/store/ducks/products';
import { CartTypes } from '~/store/ducks/cart';
import { loadCategorys, loadProducts, loadProduct } from './products';
import {
  loadAddProductToCart,
  loadRemoveProduct,
  loadUpdateQuantity,
  loadUpdateSubtotal,
} from './cart';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.LOAD_CATEGORYS, loadCategorys),
    takeLatest(ProductsTypes.LOAD_PRODUCTS, loadProducts),
    takeLatest(ProductsTypes.LOAD_PRODUCT, loadProduct),
    takeLatest(CartTypes.LOAD_ADD_PRODUCT_TO_CART, loadAddProductToCart),
    takeLatest(CartTypes.LOAD_REMOVE_PRODUCT, loadRemoveProduct),
    takeLatest(CartTypes.LOAD_UPDATE_QUANTITY, loadUpdateQuantity),
    takeLatest(CartTypes.LOAD_UPDATE_SUBTOTAL, loadUpdateSubtotal),
  ]);
}
