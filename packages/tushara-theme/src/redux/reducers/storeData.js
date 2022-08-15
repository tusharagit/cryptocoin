const initialState = {}

const storeData = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_GLOBAL":
            return{
                ...state, data: action.payload
            };
        case "SHOW_CRYPTO":
            return{
                ...state, cryptoPrice: action.payload
            };           
        default:
            return state;
    }
};

export default storeData