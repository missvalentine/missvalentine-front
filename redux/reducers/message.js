const initialState = {
  show: false,
  type: null,
  title: '',
  content: '',
  okText: 'Ok',
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        ...payload,
      };

    case 'SHOW_MESSAGE':
      return {
        ...state,
        show: true,
      };

    case 'CLOSE_MESSAGE':
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};
