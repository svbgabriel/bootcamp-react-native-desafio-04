import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import ProductsActions from '~/store/ducks/products';

export function* loadCategorys() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(ProductsActions.successCategorys(response.data));

    yield put(ProductsActions.setCurrentCategory(response.data[0].id));
  } catch (err) {
    yield put(ProductsActions.failureCategorys());
  }
}

export function* setProducts({ id }) {
  const response = yield call(api.get, `category_products/${id}`);

  yield put(ProductsActions.setProducts(response.data));
}
