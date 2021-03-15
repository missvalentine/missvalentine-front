import axios from 'axios';
import store from '../redux/store';

const baseUrl = false
  ? 'http://localhost:5000/api'
  : 'https://missval.herokuapp.com/api';
export const useHttp = async ({ method = 'get', url, data, options }) => {
  try {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const { user, token } = auth;
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (user) {
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
