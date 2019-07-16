import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import ProductsActions from '~/store/ducks/products';

export function* loadProducts(id) {
  const response = yield call(api.get, `category_products/${id}`);

  try {
    yield put(ProductsActions.successProducts(response.data.products));
  } catch (err) {
    yield put(ProductsActions.failureProducts());
  }
}

export function* loadCategorys({ id }) {
  console.tron.log(id);
  try {
    if (id) {
      yield put(ProductsActions.setCurrentCategory(id));

      yield loadProducts(id);
    } else {
      const response = yield call(api.get, 'categories');

      yield put(ProductsActions.setCurrentCategory(response.data[0].id));

      yield put(ProductsActions.successCategorys(response.data));

      yield loadProducts(response.data[0].id);
    }
  } catch (err) {
    yield put(ProductsActions.failureCategorys());
  }
}
