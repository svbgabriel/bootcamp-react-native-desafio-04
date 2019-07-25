import { put, select } from 'redux-saga/effects';
import CartActions from '~/store/ducks/cart';
import { getCart } from './selectors';

export function* loadRemoveProduct({ id }) {
  const cartFull = yield select(getCart);

  const cartRemoved = cartFull.filter(cartItem => cartItem.id !== id);

  yield put(CartActions.successRemoveProduct(cartRemoved));
}
