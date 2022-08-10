import React, {useState, useEffect} from 'react';
import { connect } from "frontity"

import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';

import axios from 'axios'

import { useDispatch } from 'react-redux';
import firebase from "firebase/app";
import "firebase/firestore"; // <- needed if using firestore

const Dashboard = ({ state })  => {
   const baseURL = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest"
   const apiKey = "7f5838ce-7efb-4887-802a-72a148500f58"

   const[marketcap, getmarketcap] = useState("Loading...")

   useEffect(()=>{
      console.log("in useEffectttt")
      axios.get(baseURL, {
         headers: { 'X-CMC_PRO_API_KEY': apiKey }
     })
      .then((res)=>{
         console.log(res)
         getmarketcap(res.data.data.quote.USD.total_market_cap/1000000000)
         console.log(marketcap)
      })
      .catch((err)=>{console.log(err)})


   },[])

    return (
      <div className="Dashboard" name="Dashboard">
         <paper-card heading="Market Capitalization" alt="Emmental" class="cardBg">
            <div className="card-content">$ {marketcap}</div>
            <div className="card-actions">
            <paper-button>Refresh</paper-button>
            </div>
         </paper-card>         
         <Global styles={css(externalCss)} />
      </div>
      );
};

export default connect(Dashboard);