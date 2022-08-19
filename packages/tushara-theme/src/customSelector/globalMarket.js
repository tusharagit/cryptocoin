import { createSelector } from "reselect";

export const marketCapital = (state) => state.storeData.data.USD.total_market_cap;
export const marketVolume = (state) => state.storeData.data.USD.total_volume_24h;

export const getMarketCapital = createSelector(marketCapital, (value) => {
    return Math.round(value/1000000000) + " Billion";
});

export const getMarketVolume = createSelector(marketVolume, (value) => {
    return  Math.round(value/1000000000) + " Billion";
});