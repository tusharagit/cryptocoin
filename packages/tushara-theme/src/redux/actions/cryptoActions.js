import {SHOW_GLOBAL, SHOW_CRYPTO, SHOW_NEWS, GET_CRYPTO, GET_GLOBAL, GET_NEWS, GET_ADVANCE_NEWS, SHOW_ADVANCE_NEWS} from './actionType';

export const getGlobal = () => ({
    type: GET_GLOBAL
});
export const showGlobal = (payloadData) => ({
    type: SHOW_GLOBAL,
    payload:payloadData
});

/* for getting & showing coin data*/
export const getCrypto = (payloadData) => ({
    type: GET_CRYPTO,
    payload: payloadData
});
export const showCrypto = (payloadData) => ({
    type: SHOW_CRYPTO,
    payload: payloadData
});


export const getNews = (payloadData) => ({
    type: GET_NEWS,
    payload: payloadData
});
export const showNews = (payloadData) => ({
    type: SHOW_NEWS,
    payload: payloadData
});

export const getAdvanceNews = (payloadData) => ({
    type: GET_ADVANCE_NEWS,
    payload: payloadData
});
export const showAdvanceNews = (payloadData) => ({
    type: SHOW_ADVANCE_NEWS,
    payload: payloadData
});


