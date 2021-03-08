const initialState = {
  user: null,
  token: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'SET_AUTH':
      return {
        ...state,
        ...payload,
      };
    case 'Clear_AUTH':
      return {
        ...state,
        user: null,
        token: null,
      };
    case 'SET_USER':
      return {
        ...state,
        user: payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: payload,
      };
    case 'CLEAR_TOKEN':
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
