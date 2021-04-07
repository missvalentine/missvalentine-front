import axios from 'axios';
import apiList from './apiList';
import { useHttp } from '../../utilis/useHttp';
// const auth = JSON.parse(localStorage.getItem('auth'));
// const { user } = auth;
// const { _id } = user;

const _id = '601bef27d29ac85814619ba3';

export const getAllCategories = (data) =>
  useHttp({
    method: 'get',
    url: `/category/all`,
    data,
  });

export const getAllProducts = (data) =>
  useHttp({
    method: 'get',
    url: `/product/all`,
    data,
  });

export const getAllSubcategories = () =>
  useHttp({
    method: 'get',
    url: `/subcategory/all`,
  });

//get one ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getCategory = (id) =>
  useHttp({
    method: 'get',
    url: `/category/${id}`,
  });

export const getProduct = (id) =>
  useHttp({
    method: 'get',
    url: `/product/${id}`,
  });
export const getSubcategory = (id) =>
  useHttp({
    method: 'get',
    url: `/subcategory/${id}`,
  });

//create ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const createCategory = (data) =>
  useHttp({
    method: 'post',
    url: `/category/create/${_id}`,
    data,
  });

export const createProduct = (data) =>
  useHttp({
    method: 'post',
    url: `/product/create/${_id}`,
    data,
    options: {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=something',
      },
    },
  });
export const createSubcategory = (data) =>
  useHttp({
    method: 'post',
    url: `/subcategory/create/${_id}`,
    data,
  });

//Delete  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const deleteCategory = (pid) =>
  useHttp({
    method: 'DELETE',
    url: `/category/${pid}/${_id}`,
  });
export const deleteProduct = (pid) =>
  useHttp({
    method: 'delete',
    url: `/product/${pid}/${_id}`,
  });
export const deleteSubcategory = (pid) =>
  useHttp({
    method: 'delete',
    url: `/subcategory/${pid}/${_id}`,
  });
