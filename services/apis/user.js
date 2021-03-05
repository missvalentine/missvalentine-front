import apiList from "./apiList";
import axios from "axios";

export const registerUser = (body) =>
  axios.post(apiList.userRegistration, {
    ...body,
    email: body.email.toLowerCase(),
    role: "customer",
  });
export const loginUser = (body) =>
  axios.post(apiList.userLogin, { ...body, email: body.email.toLowerCase() });
export const getUserDetails = (userId) =>
  axios.get(apiList.getUserDetails + userId);
export const updateUserDetails = (body) =>
  axios.post(apiList.updateUserDetails, { ...body });
export const updateUserPassword = (body) =>
  axios.post(apiList.updateUserPassword, { ...body });
export const getOrders = (userId) => axios.get(apiList.orderList + userId);
export const forgotPassword = (body) =>
  axios.post(apiList.forgotPassword, { ...body, firststep: "aa" });
export const setForgotPassword = (body) =>
  axios.post(apiList.forgotPassword, { ...body });
export const addSubscriber = (email) =>
  axios.post(apiList.addSubscriber, { email });
export const getSubscribers = () => axios.get(apiList.getSubscribers);
