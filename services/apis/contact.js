import { useHttp } from '../../utilis/useHttp';
const _id = '601bef27d29ac85814619ba3';

export const createContactUs = (data) =>
  useHttp({
    method: 'post',
    url: `/contact`,
    data,
  });

export const deleteContact = (id) =>
  useHttp({
    method: 'delete',
    url: `/contact/${id}/${_id}`,
  });

export const getAllQuery = (data) =>
  useHttp({
    method: 'get',
    url: `/contact/query/${_id}`,
    data,
  });
export const getAllEnquiry = (data) =>
  useHttp({
    method: 'get',
    url: `/contact/enquiry/${_id}`,
    data,
  });
export const getAllPromotions = (data) =>
  useHttp({
    method: 'get',
    url: `/contact/promotions/${_id}`,
    data,
  });
