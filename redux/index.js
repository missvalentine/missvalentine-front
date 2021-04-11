import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
