import { put, select } from 'redux-saga/effects';
import CartActions from '~/store/ducks/cart';
import { getCart } from './selectors';

export function* removeProduct(id) {
  const cartFull = yield select(getCart);

  console.tron.log(cartFull);

  const cartRemoved = cartFull.filter(cartItem => cartItem.id !== id);

  yield put(CartActions.removeProduct(cartRemoved));
}
