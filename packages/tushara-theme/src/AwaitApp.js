import Dashboard from './component/Dashboard/Dashboard';
import store, { rrfProps } from "./redux/store";
import { Provider } from "react-redux";
//import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import React, {useState, useEffect} from 'react';
import News from './component/News.js';
const AwaitApp = (props)  => {
    return(
        <>
        {
            props.component == "dashboard" ? <Provider store={store}><Dashboard/></Provider> 
            : <Provider store={store}><News/></Provider>  
        }
                  
        </>  
    )
}
export default (AwaitApp);

