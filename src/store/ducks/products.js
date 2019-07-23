import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadCategorys: ['id'],
  successCategorys: ['data'],
  failureCategorys: null,
  setCurrentCategory: ['id'],
  loadProducts: ['id'],
  successProducts: ['data'],
  failureProducts: null,
  loadProduct: ['id'],
  successProduct: ['data'],
  failureProduct: null,
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  categorys: [],
  products: [],
  currentCategory: -1,
  currentProduct: {},
  loading: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUCCESS_CATEGORYS]: (state, { data }) => state.merge({ categorys: data }),
  [Types.SET_CURRENT_CATEGORY]: (state, { id }) => state.merge({ currentCategory: id }),
  [Types.SUCCESS_PRODUCTS]: (state, { data }) => state.merge({ products: data, loading: false }),
  [Types.SUCCESS_PRODUCT]: (state, { data }) => state.merge({ currentProduct: data }),
});
