import {
  SET_PRODUCTS,
  SET_PRODUCT,
  CLEAR_PRODUCT,
  SET_CATEGORIES,
} from '../actions/type';

import {
  getVisibleProducts,
  getFeaturedProduct,
  getCategoriesProducts,
} from '../../services/helpers/product';
const initialState = {
  products: [],
  product: null,
  featured: [],
  categories: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        // products: payload,
      };
    case SET_CATEGORIES:
      // const c = payload.map((p) => {
      //   return {
      //     title: p.name,
      //   };
      // });

      return {
        ...state,
        categories: payload,
        // products: payload,
      };

    case SET_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
      };

    default:
      return state;
  }
};
