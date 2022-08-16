const initialState = {}

const storeData = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_GLOBAL":
            return{
                ...state, data: action.payload
            };
        case "SHOW_CRYPTO":
            const cData = action.payload.data.data;
            const cryptoList = cData.map((crypto)=>{
                const {cmc_rank, name, quote:{USD:{price}}, quote:{USD:{percent_change_24h}}} = crypto
                return {cmc_rank, name, price, percent_change_24h}
             })            
            return{
                ...state, cryptoPrice: cryptoList
            };    
        case "SHOW_NEWS":
            const cnData = res.data.articles;
            const newsList = cnData.map((news)=>{
                const {title, url, description, urlToImage} = news
                return {title, url, description, urlToImage}
            })             
            return{
                ...state, cryptoNews: newsList
            };                   
        default:
            return state;
    }
};

export default storeData