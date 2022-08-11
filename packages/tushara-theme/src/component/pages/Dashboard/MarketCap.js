import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';
import axios from 'axios'

import { showGlobal } from '../../../redux/actions/index.js';

const MarketCap = ()  => {
   const baseURL = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest"
   const apiKey = "7f5838ce-7efb-4887-802a-72a148500f58"
   const dispatch = useDispatch()

   const[marketcap, getmarketcap] = useState("Loading...")

   useEffect(()=>{
      axios.get(baseURL, {
         headers: { 'X-CMC_PRO_API_KEY': apiKey }
      })
      .then((res)=>{
         getmarketcap(res.data.data.quote.USD.total_market_cap/1000000000)
         dispatch(showGlobal(res.data.data.quote.USD.total_market_cap/1000000000))
      })
      .catch((err)=>{console.log(err)})
   },[])

    return (
      <>
         <paper-card heading="Market Capitalization" alt="Emmental" class="cardBg">
            <div className="card-content">$ {marketcap}</div>
            <div className="card-actions">
            <paper-button>Refresh</paper-button>
            </div>
         </paper-card>         
         <Global styles={css(externalCss)} />
      </>
      );
};

export default (MarketCap);