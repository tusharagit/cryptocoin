const initialState = {
    flag: true,
    data: []
}

const storeData = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_GLOBAL":
            return{
                ...state, data: [action.payload]
            };
        case "DELETE_ITEM":
            return{};
        case "UPDATE_ITEM":
            return{};             
        default:
            return state;
    }
};

export default storeData