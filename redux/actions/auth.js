import { signInReq } from '../../services/apis/auth';

export const signIn = (obj) => (dispatch) => {
  return signInReq(obj)
    .then((res) => {
      if (res.data) {
        dispatch({
          type: 'SET_AUTH',
          payload: res.data,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
      }
      return res;
    })
    .catch((err) => {
      console.log({ err });
      return err;
    });
};
export const signOut = () => (dispatch) => {
  dispatch({
    type: 'SET_AUTH',
    payload: {},
  });
  localStorage.removeItem('auth');
};
