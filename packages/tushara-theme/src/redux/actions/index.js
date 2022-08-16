import {SHOW_GLOBAL, SHOW_CRYPTO, SHOW_NEWS} from './type';

export const showGlobal = (payloadData) => ({
    type: SHOW_GLOBAL,
    payload:payloadData
});

export const showCrypto = (payloadData) => ({
    type: SHOW_CRYPTO,
    payload: payloadData
});

export const showNews = (payloadData) => ({
    type: SHOW_NEWS,
    payload: payloadData
});
