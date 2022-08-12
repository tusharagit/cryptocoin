import React, {useState, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import { Global, css  } from "frontity"
import externalCss from './Dashboard.css';
import axios from 'axios'
import { createSelector } from 'reselect'

import { showGlobal } from '../../../redux/actions/index.js';
import { API_KEY, GLOBAL_DATA_PATH } from '../../../Constant.js';
import { getMarketCapital, getMarketVolume } from '../../../customSelector/globalMarket.js';
import DashCard from './DashCard.js';

const Dashboard = ( props )  => {
   const dispatch = useDispatch()

   useEffect(()=>{
      axios.get(GLOBAL_DATA_PATH, {headers: { 'X-CMC_PRO_API_KEY': API_KEY+1 }
      })
      .then((res)=>{
         console.log(res)
         dispatch(showGlobal(res.data.data.quote))
      })
      .catch((err)=>{console.log(err)})
   },[])

    return (
      <div className="Dashboard" name="Dashboard">
         <DashCard heading="Market Capitalization" marketValue={props.marketCap}/>
         <DashCard heading="Market Volume" marketValue={props.marketVol}/>
         <Global styles={css(externalCss)} />
      </div>
      );
};

const mapStateToProps = (state) => {
   try{
      return {
         marketCap : getMarketCapital(state) ,
         marketVol : getMarketVolume(state)
      }
   }catch{(err)=>{
         console.log(err)
         return {
            marketCap : "NULL" ,
            marketVol : "NULL"
         }
      }
   }
   

}

export default connect(mapStateToProps)(Dashboard);