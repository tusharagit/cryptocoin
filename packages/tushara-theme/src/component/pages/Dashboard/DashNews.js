import React, {useState, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CRYPTO_NEWS, API_KEY_NEWS } from '../../../Constant.js';
import { showNews } from '../../../redux/actions/index.js';
import Loading from './Loading.js';

const DashNews = (props)  => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        axios.get(CRYPTO_NEWS, {headers: { 'X-API-KEY': API_KEY_NEWS+1 }
        })
        .then((res)=>{           
            dispatch(showNews(res))
        })
        .catch((err)=>{console.log(err)})
    },[])

    return (
      <>
        {
            (typeof props.cryptoNews === 'null' || typeof props.cryptoNews ==='undefined') ? 
                <Loading comType="news" />
            :Object.keys(props.cryptoNews).map((p)=>{
                return (
                    <Card className="newsCard">
                        <CardMedia image={props.cryptoNews[p].urlToImage} component="img" alt="alt" height="100"/>
                        <CardContent className="newscontent">
                            <Typography gutterBottom variant="subtitle1">
                                <a href= {props.cryptoNews[p].url}>{props.cryptoNews[p].title}</a>
                            </Typography>
                            <Typography variant="body2">{props.cryptoNews[p].description}</Typography>
                        </CardContent>
                    </Card>
                )
            })                       
        }      
        <Global styles={css(externalCss)} />
      </>
      );
};

const mapStateToProps = (state) => {
    try{
       return {
        cryptoNews : state.storeData.cryptoNews
       }
    }catch{(err)=>{
          console.log(err)
          return {
             cryptoNews : "NULL" ,
          }
       }
    }
 
 }

export default connect(mapStateToProps)(DashNews);