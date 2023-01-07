import { useDispatch, connect } from 'react-redux';
import React, { useState, useEffect, useRef } from "react";
import Loading from './Dashboard/Loading.js';
import { createStore, applyMiddleware } from 'redux'; 
import { Global, css } from "frontity";
import externalCss from './Dashboard/Dashboard.css';
import axios from 'axios'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import { getAdvanceNews } from '../redux/actions/cryptoActions.js';

const News = (props) => {
  const textFieldRef = useRef();
  const dispatch = useDispatch()
  const [loadMoreStart, loadMoreClick] = useState(1)
  //const [flag, flagCount] = useState(0)
  const [coinName, setCoinName] = useState("bitcoin")

  useEffect(()=>{
      dispatch(getAdvanceNews({loadMoreStart, coinName}))
 },[loadMoreStart])

  const loadMoreFun = () => {
      loadMoreClick(loadMoreStart + 5)
  }

  const searchFun = () => {
    loadMoreClick(1)
  } 

  const textboxValue = (e) => {
    try {
      setCoinName(e.target.value)
    } catch (error) {}
      
  } 


  return (
      <>
      <Grid container spacing={1}>
        <Grid container justifyContent="center"  item xs={12} sm={12} md={12} lg={12}>
          <TextField           
              id="outlined-required"
              defaultValue="Bitcoin"
              color="success" 
              onChange={textboxValue}
              focused />
          <Button variant="outlined" inputRef={textFieldRef} onClick={searchFun} size="larg" startIcon={<SearchIcon />}></Button>
        </Grid>
      
        <Grid className='newsAdvanceWrapper' item xs={12} sm={12} md={12} lg={12}>
          {
              (typeof props.cryptoNews === 'null' || typeof props.cryptoNews === 'undefined') ?
                  <Box className="loadingBox news" >
                      <Loading comType="news" />
                  </Box>
                  : Object.keys(props.cryptoNews).map((p) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <Card item xs={12} sm={4} md={4} lg={4} className="newsAdvanceCard">
                              <CardMedia image={props.cryptoNews[p].urlToImage} component="img" alt="alt" height="100" />
                              <CardContent className="newscontent">
                                  <Typography gutterBottom variant="subtitle1">
                                      <a href={props.cryptoNews[p].url}>{props.cryptoNews[p].title}</a>
                                  </Typography>
                                  <Typography sx={{ fontSize: "12px" }} variant="body2">{props.cryptoNews[p].description}</Typography>
                              </CardContent>
                          </Card>
                        </Grid>
                      )
                  })
          }
          <div className='loadmoreWrapper'><Button size="small" onClick={loadMoreFun}>Load More</Button></div>
          <Global styles={css(externalCss)} />
          </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  try {
      return {
          cryptoNews: state.storeData.cryptoAdvanceNews
      }
  } catch {
      (err) => {
          console.log(err)
          return {
              cryptoNews: "NULL",
          }
      }
  }

}


export default connect(mapStateToProps)(News);


