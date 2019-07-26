import { put, select } from 'redux-saga/effects';
import CartActions from '~/store/ducks/cart';
import { getCart } from './selectors';

export function* loadRemoveProduct({ id }) {
  const cartFull = yield select(getCart);

  const cartRemoved = cartFull.filter(cartItem => cartItem.id !== id);

  yield put(CartActions.successRemoveProduct(cartRemoved));
}

export function* loadUpdateQuantity({ id, newQuantity }) {
  const cartFull = yield select(getCart);

  const newCart = cartFull.map(cartItem => (cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem));

  yield put(CartActions.successUpdateQuantity(newCart));
}
