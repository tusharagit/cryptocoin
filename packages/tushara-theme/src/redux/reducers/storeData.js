const initialState = {}

const storeData = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_GLOBAL":
            return{
                ...state, data: action.payload
            };
        case "SHOW_CRYPTO":
            const cData = action.payload.data.data;
            const cryptoList = Object.keys(cData).map((crypto)=>{
                const {cmc_rank, name, quote:{USD:{price}}, quote:{USD:{percent_change_24h}}} = cData[crypto]
                return {cmc_rank, name, price, percent_change_24h}
             })      

             try{
                let updatedCryptoList = [...state.cryptoPrice]
                cryptoList.forEach((item)=>{
                    updatedCryptoList.push(item)
                })
                return{ ...state, cryptoPrice: updatedCryptoList}
             }catch{
                return{ ...state, cryptoPrice: cryptoList}  
             }
 
        case "SHOW_NEWS":
            const cnData = action.payload.data.data.articles
            const newsList = cnData.map((news)=>{
                const {title, url, description, urlToImage} = news
                return {title, url, description, urlToImage}
            })

            try{
                let updatedNewsList = [...state.cryptoNews]
                newsList.forEach((item)=>{
                    updatedNewsList.push(item)
                })
                return{ ...state, cryptoNews: updatedNewsList}
             }catch{
                return{ ...state, cryptoNews: newsList}  
             }
                      
                 
        default:
            return state;
    }
};

export default storeData