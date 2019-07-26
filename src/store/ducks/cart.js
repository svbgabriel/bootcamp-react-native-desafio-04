import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadAddProductToCart: ['product'],
  successAddProductToCart: ['product'],
  loadRemoveProduct: ['id'],
  successRemoveProduct: ['cart'],
  loadUpdateQuantity: ['id', 'newQuantity'],
  successUpdateQuantity: ['cart'],
  loadUpdateSubtotal: null,
  successUpdateSubtotal: ['subTotal'],
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
  [Types.SUCCESS_ADD_PRODUCT_TO_CART]: (state, { product }) => state.merge({ cart: [...state.cart, product] }),
  [Types.SUCCESS_REMOVE_PRODUCT]: (state, { cart }) => state.merge({ cart }),
  [Types.SUCCESS_UPDATE_QUANTITY]: (state, { cart }) => state.merge({ cart }),
  [Types.SUCCESS_UPDATE_SUBTOTAL]: (state, { subTotal }) => state.merge({ subTotal }),
});
