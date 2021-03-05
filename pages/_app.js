// pages/_app.js
import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore } from "../redux/store";
import AppWrapper from "../components/AppWrapper"
import withRedux from "next-redux-wrapper";
import Head from "next/head";
import projectSettings from "../constants/projectSettings"
/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;
        return (<>
            <Head>
                <script
                    src={`https://maps.googleapis.com/maps/api/js?key=${projectSettings.googleApiKey}&libraries=places&v=3`}
                   // async
                   // defer
                ></script>
              

            </Head>
            <Provider store={store}>
                <PersistGate
                    persistor={store.__persistor}
                // loading={<Component isPersist={false} {...pageProps} />}
                >
                    <AppWrapper router={this.props.router}>
                        <Component isPersist={true} {...pageProps} />
                    </AppWrapper>
                </PersistGate>
            </Provider>
        </>
        );
    }

}

export default withRedux(makeStore, { debug: true })(MyApp);