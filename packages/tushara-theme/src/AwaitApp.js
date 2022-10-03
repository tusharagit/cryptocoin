import Dashboard from './component/Dashboard/Dashboard';
import store, { rrfProps } from "./redux/store";
import { Provider } from "react-redux";
//import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import React, {useState, useEffect} from 'react';

const AwaitApp = (props)  => {
    return(
        <>
            <Provider store={store}>
                    <Dashboard/>
            </Provider>        
        </>  
    )
}
export default (AwaitApp);

