import {combineReducers} from 'redux';
import storeData from './cryptoReducer';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers ({
    storeData,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
export default rootReducer;