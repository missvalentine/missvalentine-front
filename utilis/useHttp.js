import axios from 'axios';
import { baseUrl } from '../constants/projectSettings';

export const useHttp = async ({ method = 'get', url, data, options }) => {
  try {
    console.log('http', data);
    const auth = JSON.parse(localStorage.getItem('auth'));
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (auth) {
      const { user, token } = auth;
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    if (options && options.headers) {
      headers = { ...headers, ...options.headers };
    }
    const res = await axios({
      method,
      url,
      baseURL: baseUrl,
      data,
      headers: headers,
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
