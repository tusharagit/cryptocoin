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

import externalCss from './Dashboard.css';
import Loading from './Loading.js';
import { API_KEY, CRYPTO_PRICE } from '../../../Constant.js';
import { showCrypto } from '../../../redux/actions/index.js';
import {allCryptoList} from '../../../customSelector/cryptoList.js';

const DashTable = (props)  => {
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get(CRYPTO_PRICE, {headers: { 'X-CMC_PRO_API_KEY': API_KEY }
    })
    .then((res)=>{
       dispatch(showCrypto(res))
    })
    .catch((err)=>{console.log(err)})
 },[])

   return (
      <div className="DashTable" name="DashTable">
            <TableContainer className="tableWrapper" component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tdDiv tdHead">Rank </TableCell>
                    <TableCell className="tdDiv tdHead" align="center">Name</TableCell>
                    <TableCell className="tdDiv tdHead" align="center">Price</TableCell>
                    <TableCell className="tdDiv tdHead" align="center">24h chg%</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                      (typeof props.crypto === 'null' || typeof props.crypto ==='undefined') ? 
                        <Loading />
                      :Object.keys(props.crypto).map((p)=>{
                        return (
                          <TableRow>     
                            <TableCell className="tdDiv fColor" >{props.crypto[p].cmc_rank}</TableCell>
                            <TableCell className="tdDiv fColor" align="center">{props.crypto[p].name}</TableCell>
                            <TableCell className="tdDiv fColor" align="center">{props.crypto[p].price}</TableCell>
                            <TableCell className="tdDiv" align="center" sx={{color:props.crypto[p].flag}} >{props.crypto[p].percent_change_24h}</TableCell>
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

