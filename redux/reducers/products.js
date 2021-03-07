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
  recentlyViewed: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
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
    case 'SET_RECENTLY_VIEWD':
      return {
        ...state,
        recentlyViewed: payload,
      };
    case 'ADD_TO_RECENTLY_VIEWD':
      let tempRecentlyViewed = state.recentlyViewed;
      tempRecentlyViewed.push(payload);
      return {
        ...state,
        recentlyViewed: tempRecentlyViewed,
      };

    case 'CLEAR_RECENTLY_VIEWD':
      return {
        ...state,
        recentlyViewed: null,
      };

    default:
      return state;
  }
};
