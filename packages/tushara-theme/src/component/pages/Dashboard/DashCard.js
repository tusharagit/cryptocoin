import React from 'react';
import { Global, css } from "frontity"; 
import externalCss from './Dashboard.css';

const DashCard = (props)  => {
const {heading, marketValue} = props

    return (
      <>
         <paper-card heading={heading} className="cardBg">
            <div className="card-content">$ {marketValue} Billion</div>

         </paper-card>         
         <Global styles={css(externalCss)} />
      </>
      );
};

export default (DashCard);