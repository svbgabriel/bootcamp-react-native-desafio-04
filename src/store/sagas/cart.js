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

  const cartUnit = cartFull.find(cartItem => cartItem.id === id);
  const newCartUnit = { ...cartUnit, quantity: newQuantity };

  const cartRemoved = cartFull.filter(cartItem => cartItem.id !== id);
  const newCart = [...cartRemoved, newCartUnit];

  yield put(CartActions.successUpdateQuantity(newCart));
}
