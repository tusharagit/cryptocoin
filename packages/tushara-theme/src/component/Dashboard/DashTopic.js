import React from 'react';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {GoogleCharts} from 'google-charts';

const DashTopic = (props)  => {

    GoogleCharts.load(drawChart);
    function drawChart() {
    
        // Standard google charts functionality is available as GoogleCharts.api after load
        const data = GoogleCharts.api.visualization.arrayToDataTable([
            ['Chart thing', 'Chart amount'],
            ['Lorem ipsum', 60],
            ['Dolor sit', 22],
            ['Sit amet', 18]
        ]);
        const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'));
        pie_1_chart.draw(data);
    }    

    return (
      <>
        <Card sx={{width: { xs: '100%', sm:'40%' }}} className="globalcard">
            <CardContent>
                <div className="chipWrapper">
                    <Chip label="BTC" color="primary" />
                    <Chip label="ADA" color="primary" />
                    <Chip label="SHIB" color="primary" />
                    <Chip label="USDT" color="primary" />
                    <Chip label="DOT" color="primary" />
                    <Chip label="SOL" color="primary" />
                    <Chip label="ETH" color="primary" />
                </div>
                <div id="piechart1 "></div>
            </CardContent>
        </Card>             
         <Global styles={css(externalCss)} />
      </>
      );
};

export default (DashTopic);