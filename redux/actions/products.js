import { addSlugToProduct } from '../../services/helpers/product';
import {
  getAllProducts,
  getProductById,
  getAllCategories,
  getCategoryById,
} from '../../services/apis/products';
import { getAllSubcategories } from '../../services/apis/admin';

export const getProducts = (data) => (dispatch) => {
  getAllProducts(data)
    .then((res) => {
      if (res.data && res.data.success) {
        dispatch({
          type: 'SET_PRODUCTS',
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

export const getCategory = (_id) => (dispatch) => {
  getCategoryById(_id)
    .then((res) => {
      if (res.data && res.data.success) {
        console.log('SET_CATEGORY', res.data.data);

        dispatch({
          type: 'SET_CATEGORY',
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
          type: 'SET_CATEGORIES',
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const getSubCategories = () => (dispatch) => {
  getAllSubcategories()
    .then((res) => {
      if (res.data && res.data.success) {
        dispatch({
          type: 'SET_SUBCATEGORIES',
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log({ err });
    });
};
