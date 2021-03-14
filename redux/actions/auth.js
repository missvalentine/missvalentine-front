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
    })
    .catch((err) => {
      console.log({ err });
    });
};
