import {combineReducers} from 'redux';
import items from './items';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers ({
    items,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
export default rootReducer;