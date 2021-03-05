import axios from "axios";
import apiList from "./apiList";

export const trackOrder = body =>
  axios.post(apiList.trackOrder, body);