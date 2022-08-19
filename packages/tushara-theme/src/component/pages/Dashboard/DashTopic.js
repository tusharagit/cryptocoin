import React from 'react';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const DashTopic = (props)  => {

    return (
      <>
        <Card sx={{width:"40%"}} className="globalcard">
            <CardContent>
                <div className="chipWrapper">
                    <Chip label="Bitcoin" color="primary" />
                    <Chip label="ADA" color="primary" />
                    <Chip label="SHIBA" color="primary" />
                    <Chip label="USDT" color="primary" />
                    <Chip label="DOT" color="primary" />
                    <Chip label="Solana" color="primary" />
                    <Chip label="Ether" color="primary" />
                </div>
            </CardContent>
        </Card>             
         <Global styles={css(externalCss)} />
      </>
      );
};

export default (DashTopic);