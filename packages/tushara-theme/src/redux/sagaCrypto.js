import {takeEvery, put} from 'redux-saga/effects'
import {GET_CRYPTO, SHOW_CRYPTO} from './actions/actionType';

function* sagaCrypto(){
   yield takeEvery(GET_CRYPTO, getCrypto)
}

function* getCrypto(loadMore){
    let data = yield fetch("https://myapi-9bo5iger1-tushar-acharekar.vercel.app/api/cryptoList?loadMoreStart=" + loadMore.payload ) 
    data = yield data.json();    
    yield put({type: SHOW_CRYPTO, payload:data})
}

export default sagaCrypto; 