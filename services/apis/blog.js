import axios from "axios";
import apiList from "./apiList";

console.log(apiList.getCategoryByName);

export const getBlogs = (pageNo, tag) =>
  axios.post(apiList.getBlogs, { pageNo, tag });

export const getCategory = (name) => {
  console.log(apiList.getCategoryByName, name);
  return axios.get(apiList.getCategoryByName + name);
};

export const getBanner = (name) => {
  console.log(apiList.getBannerByName, name);
  return axios.get(apiList.getBannerByName + name);
};
