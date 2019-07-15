import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadCategorys: null,
  successCategorys: ['data'],
  failureCategorys: null,
  setCurrentCategory: ['id'],
  loadProducts: ['id'],
  successProducts: ['data'],
  failureProducts: null,
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  categorys: [],
  products: [],
  currentCategory: -1,
  loading: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUCCESS_CATEGORYS]: (state, { data }) => state.merge({ categorys: data }),
  [Types.SET_CURRENT_CATEGORY]: (state, { id }) => state.merge({ currentCategory: id }),
  [Types.SUCCESS_PRODUCTS]: (state, { data }) => state.merge({ products: data, loading: false }),
});
