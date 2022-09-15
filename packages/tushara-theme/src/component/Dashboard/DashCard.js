import React from 'react';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DashCard = (props)  => {
const {heading, marketValue, icon} = props

    return (
      <>
                     <Card sx={{width: { xs: '100%', sm:'30%' }}} className="globalcard">
                           <CardContent>
                              <Typography variant="h6" component="div">{heading}</Typography>
                              <Typography variant="body2" component="div" color="#FFF">
                                    {icon === "currency" ? <CurrencyExchangeIcon/>:<ShowChartRoundedIcon/>}
                                    {marketValue}
                              </Typography>
                           </CardContent>
                     </Card>      
      
         <Global styles={css(externalCss)} />
      </>
      );
};

export default (DashCard);