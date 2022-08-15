import {SHOW_GLOBAL, SHOW_CRYPTO} from './type';

export const showGlobal = (payloadData) => ({
    type: SHOW_GLOBAL,
    payload:payloadData
});

export const showCrypto = (payloadData) => ({
    type: SHOW_CRYPTO,
    payload: payloadData
});
