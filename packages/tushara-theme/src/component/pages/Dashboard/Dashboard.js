import React, {useState, useEffect} from 'react';
import { connect } from "frontity"

import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';
import MarketCap from './MarketCap.js';

import { useDispatch } from 'react-redux';
import firebase from "firebase/app";
import "firebase/firestore"; // <- needed if using firestore

const Dashboard = ({ state })  => {
   useEffect(()=>{
      console.log("in useEffectttt")
   },[])

    return (
      <div className="Dashboard" name="Dashboard">
         <MarketCap/>
         <Global styles={css(externalCss)} />
      </div>
      );
};

export default connect(Dashboard);