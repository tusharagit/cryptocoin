import { takeEvery, put } from 'redux-saga/effects'
import { GET_CRYPTO, SHOW_CRYPTO, GET_GLOBAL, SHOW_GLOBAL, GET_NEWS, SHOW_NEWS, GET_ADVANCE_NEWS, SHOW_ADVANCE_NEWS } from './actions/actionType';

function* sagaCrypto() {
    yield takeEvery(GET_CRYPTO, getCrypto)
    yield takeEvery(GET_GLOBAL, getGlobal)
    yield takeEvery(GET_NEWS, getNews)
    yield takeEvery(GET_ADVANCE_NEWS, getAdvanceNews)
}

function* getCrypto(loadMore) {
    let data = yield fetch("https://myapi-9bo5iger1-tushar-acharekar.vercel.app/api/cryptoList?loadMoreStart=" + loadMore.payload)
    data = yield data.json();
    yield put({ type: SHOW_CRYPTO, payload: data })
}

function* getGlobal() {
    let data = yield fetch("https://myapi-9bo5iger1-tushar-acharekar.vercel.app/api/globalData")
    data = yield data.json();
    yield put({ type: SHOW_GLOBAL, payload: data })
}

function* getNews(loadMore) {
    let data = yield fetch("https://myapi-9bo5iger1-tushar-acharekar.vercel.app/api/cryptoNews?loadMoreStart=" + loadMore.payload)
    data = yield data.json();
    yield put({ type: SHOW_NEWS, payload: data })
}

function* getAdvanceNews(payloadData) {
    const url = "https://myapi-6vuqnc2or-tushar-acharekar.vercel.app/api/cryptoNews?"
    let finalUrl, reset;

    finalUrl = url + "loadMoreStart=" + payloadData.payload.loadMoreStart + "&coinName=" + payloadData.payload.coinName;
    if(payloadData.payload.loadMoreStart<5){reset=1;}

    let data = yield fetch(finalUrl)
    data = yield data.json();

    yield put({ type: SHOW_ADVANCE_NEWS, payload: {data, reset} })
}

export default sagaCrypto; 