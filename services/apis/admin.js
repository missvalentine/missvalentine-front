import { useHttp } from '../../utilis/useHttp';

const _id = '601bef27d29ac85814619ba3';

export const getAllCategories = () =>
  useHttp({
    method: 'get',
    url: `/category/all`,
  });

export const getAllProducts = () =>
  useHttp({
    method: 'get',
    url: `/product/all`,
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

//edit ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const updateCategory = (data, cid) =>
  useHttp({
    method: 'put',
    url: `/category/${cid}/${_id}`,
    data,
  });

export const updateSubCategory = (data, cid) =>
  useHttp({
    method: 'put',
    url: `/subcategory/${cid}/${_id}`,
    data,
  });
