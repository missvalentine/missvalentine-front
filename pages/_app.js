// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../redux';

import Head from 'next/head';
import projectSettings from '../constants/projectSettings';
import '../components/styles/app.scss';
/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

const { store, persistor } = createStore();

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${projectSettings.googleApiKey}&libraries=places&v=3`}
          // async
          // defer
        ></script>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  if (Component.getInitialProps) {
    const pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  return {};
};

export default App;
