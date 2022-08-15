import { createSelector } from "reselect";

export const allCrypto = (state) => state.storeData.cryptoPrice;

export const allCryptoList = createSelector(allCrypto, (value) => {
    const output = Object.keys(value).map((item) => {
        return {
            ...value[item], 
            price:value[item].price.toFixed(2), percent_change_24h:value[item].percent_change_24h.toFixed(2),
            flag: (parseInt(value[item].percent_change_24h) > 0) ? "#12e412" : "#ff0b0b"
        }
    })
    console.log(output)
    return output;
});