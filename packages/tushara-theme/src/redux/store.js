
import firebase from "firebase/app";
import "firebase/firestore"; // <- needed if using firestore
import { createFirestoreInstance } from "redux-firestore"; 
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';
import sagaCrypto  from "./sagaCrypto.js"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaCrypto)





/*******************firebase config******************************** */
/******************************************************* */
const firebaseConfig = {
  apiKey: "AIzaSyAe7rjj1gIhk_OYOfTlPbwZC1GapwmvJwI",
  authDomain: "myfirestore-3740d.firebaseapp.com",
  projectId: "myfirestore-3740d",
  storageBucket: "myfirestore-3740d.appspot.com",
  messagingSenderId: "831867249562",
  appId: "1:831867249562:web:c3685861ada7c2588ed023",
  measurementId: "G-GXM9VE4ZJC"
};

firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore()

const rrfConfig = {
userProfile: 'users',
useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;