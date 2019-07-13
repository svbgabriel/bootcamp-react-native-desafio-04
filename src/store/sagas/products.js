import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import ProductsActions from '~/store/ducks/products';

export function* loadCategorys() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(ProductsActions.setCategorys(response.data));
  } catch (err) {
    yield put(ProductsActions.failureCategorys());
  }
}

export function* setProducts({ id }) {
  const response = yield call(api.get, `/category_products/${id}`);

  yield put(ProductsActions.setProducts(response.data));
}
