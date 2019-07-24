import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addProductToCart: ['product'],
  removeProduct: ['id'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  cart: [],
  subTotal: 0.0,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_TO_CART]: (state, { product }) => state.merge({ cart: [...state.cart, product] }),
  [Types.REMOVE_PRODUCT]: (state, { cart }) => state.update({ cart }),
});
