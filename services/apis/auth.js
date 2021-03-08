import apiList from './apiList';
import axios from 'axios';

export const signInReq = (obj) => axios.post(apiList.signInApi, obj);
