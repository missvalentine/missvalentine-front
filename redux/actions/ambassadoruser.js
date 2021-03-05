import { SET_APUSER, UNSET_APUSER } from "./type";

export const setAPUser = ambassadoruser => {
  return ({
    type: SET_APUSER,
    payload: ambassadoruser
  });
}
export const unsetAPUser = () => ({
  type: UNSET_APUSER,
  payload: {}
});
