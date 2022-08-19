import React, {useState, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

import { showNews } from '../../../redux/actions/index.js';
import Loading from './Loading.js';

const DashNews = (props)  => {
    const dispatch = useDispatch()
    const [loadMoreStart, loadMoreClick] = useState(1)
    const [allowNews, allowNewsClick] = useState(0)
    
    useEffect(()=>{
        if(allowNews !== 0){
            axios.get("https://myapi-9bo5iger1-tushar-acharekar.vercel.app/api/cryptoNews?loadMoreStart="+loadMoreStart)
            .then((res)=>{     
                console.log("SSSSS")
                console.log(res)      
                dispatch(showNews(res))
            })
            .catch((err)=>{console.log(err)})
        }
    },[loadMoreStart,allowNews])

    const allowNewsfun = () =>{
        allowNewsClick(allowNews+1)
    }

    const loadMoreFun = () => {
        loadMoreClick(loadMoreStart+5)
      }    

    return (
      <>
        {
            (typeof props.cryptoNews === 'null' || typeof props.cryptoNews ==='undefined') ? 
                <Box className="loadingBox" sx={{ width: "98%"}}>
                    <Switch sx={{marginLeft:"25%"}} onChange={allowNewsfun}/><Typography sx={{display:"inline"}} variant="subtitle1">Activate News Section</Typography>
                    <Loading comType="news" />
                </Box>
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
        <Button size="small" onClick={loadMoreFun}>Load More</Button>     
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