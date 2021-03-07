import { SET_PRODUCTS, SET_CATEGORIES } from './type';
import { addSlugToProduct } from '../../services/helpers/product';
import {
  getAllProducts,
  getProductById,
  getAllCategories,
} from '../../services/apis/products';

export const getProducts = () => (dispatch) => {
  getAllProducts()
    .then((res) => {
      if (res.data && res.data.success) {
        console.log('hellllo', res.data.data);

        dispatch({
          type: SET_PRODUCTS,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log({ err });
    });
};
export const getProduct = (_id) => (dispatch) => {
  getProductById(_id)
    .then((res) => {
      if (res.data && res.data.success) {
        console.log('hellllo', res.data.data);

        dispatch({
          type: 'SET_PRODUCT',
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log({ err });
    });
};
export const getCategories = () => (dispatch) => {
  getAllCategories()
    .then((res) => {
      if (res.data && res.data.success) {
        dispatch({
          type: SET_CATEGORIES,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log({ err });
    });
};
