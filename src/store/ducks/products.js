import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadCategorys: null,
  setCategorys: ['data'],
  failureCategorys: null,
  setProducts: ['id'],
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  categorys: [],
  products: [],
  currentCategory: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORYS]: (state, { data }) => state.merge({ categorys: data }),
  [Types.SET_PRODUCTS]: (state, { id }) => state.merge({ currentCategorie: id }),
});
