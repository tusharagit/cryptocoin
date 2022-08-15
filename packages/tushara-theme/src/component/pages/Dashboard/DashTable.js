import React, {useState, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import { withRouter } from "react-router";
import { Global, css } from "frontity"; 
import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import externalCss from './Dashboard.css';

import { API_KEY, CRYPTO_PRICE } from '../../../Constant.js';
import { showCrypto } from '../../../redux/actions/index.js';
import {allCryptoList} from '../../../customSelector/cryptoList.js';

const DashTable = (props)  => {
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get(CRYPTO_PRICE, {headers: { 'X-CMC_PRO_API_KEY': API_KEY }
    })
    .then((res)=>{
       const cryptoList = res.data.data.map((crypto)=>{
          const {cmc_rank, name, quote:{USD:{price}}, quote:{USD:{percent_change_24h}}} = crypto
          return {cmc_rank, name, price, percent_change_24h}
       })
       dispatch(showCrypto(cryptoList))
    })
    .catch((err)=>{console.log(err)})
 },[])

   return (
      <div className="DashTable" name="DashTable">
            <TableContainer className="tableWrapper" component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color:"#FFF"}} className="tdDiv tdHead">Rank </TableCell>
                    <TableCell sx={{ color:"#FFF"}} className="tdDiv tdHead" align="center">Name</TableCell>
                    <TableCell sx={{ color:"#FFF"}} className="tdDiv tdHead" align="center">Price</TableCell>
                    <TableCell sx={{ color:"#FFF"}} className="tdDiv tdHead" align="center">24h chg%</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                      {
                        (typeof props.crypto === 'null' || typeof props.crypto ==='undefined') ? 
                        <TableRow> 
                          <TableCell colSpan={4}>
                              <Box sx={{ width: "98%" }}>
                              <Skeleton />
                              <Skeleton animation="wave" />
                              <Skeleton animation={false} />
                            </Box>
                          </TableCell>
                        </TableRow> 
                        :Object.keys(props.crypto).map((p)=>{
                          return (
                          <TableRow>     
                            <TableCell sx={{ color:"#FFF"}} className="tdDiv" component="th" scope="row">{props.crypto[p].cmc_rank}</TableCell>
                            <TableCell sx={{ color:"#FFF"}} className="tdDiv" align="center">{props.crypto[p].name}</TableCell>
                            <TableCell sx={{ color:"#FFF"}} className="tdDiv" align="center">{props.crypto[p].price}</TableCell>
                            <TableCell className="tdDiv" sx={{color:props.crypto[p].flag}} align="center">{props.crypto[p].percent_change_24h}</TableCell>
                          </TableRow>
                          )
                        })                       
                    }
                </TableBody>
              </Table>
            </TableContainer>
      </div>
      );
};

const mapStateToProps = (state) => {
  try{
     return {
        crypto: allCryptoList(state)
     }
  }catch{(err)=>{console.log(err)}}
}

export default  connect(mapStateToProps)(DashTable)

