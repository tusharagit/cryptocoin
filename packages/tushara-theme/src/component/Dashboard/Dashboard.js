import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Global, css } from "frontity"
import externalCss from './Dashboard.css';
import Grid from '@mui/material/Grid'

import { getGlobal } from '../../redux/actions/cryptoActions.js';
import { getMarketCapital, getMarketVolume } from '../../customSelector/globalMarket.js';
import DashCard from './DashCard.js';
import DashTable from './DashTable.js';
import DashNews from './DashNews.js';
import DashTopic from './DashTopic.js';

const Dashboard = (props) => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getGlobal())
   }, [])

   return (
      <div className="Dashboard" name="Dashboard">
         <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
               <div className="Topwrapper">
                  <DashCard heading="Market Cap" icon="currency" marketValue={props.marketCap} />
                  <DashCard heading="Market Volume" icon="volume" marketValue={props.marketVol} />
                  <DashTopic />
               </div>
               <DashTable />
            </Grid>
            <Grid className='newsWrapper' item xs={12} sm={12} md={4} lg={4}>
               <DashNews />
            </Grid>
         </Grid>
         <Global styles={css(externalCss)} />
      </div>
   );
};

const mapStateToProps = (state) => {
   try {
      return {
         marketCap: getMarketCapital(state),
         marketVol: getMarketVolume(state)
      }
   } catch {
      (err) => {
         console.log(err)
         return {
            marketCap: "NULL",
            marketVol: "NULL"
         }
      }
   }

}

export default connect(mapStateToProps)(Dashboard);