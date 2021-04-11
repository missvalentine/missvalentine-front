import products from './products';
import loading from './loading';
import auth from './auth';
import message from './message';
import drawers from './drawers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  products,
  drawers,
  loading,
  message,
});

export default rootReducer;
