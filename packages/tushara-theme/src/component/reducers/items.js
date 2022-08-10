const initialState = {
    data: [],
}

const items = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return{
                ...state,
                data: [...state.data, action.message],
            };
        case "DELETE_ITEM":
            return{};
        case "UPDATE_ITEM":
            return{};             
        default:
            return state;
    }
};

export default items