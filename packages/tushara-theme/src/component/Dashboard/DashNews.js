import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Global, css } from "frontity";
import externalCss from './Dashboard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

import { getNews } from '../../redux/actions/cryptoActions.js';
import Loading from './Loading.js';

const DashNews = (props) => {
    const dispatch = useDispatch()
    const [loadMoreStart, loadMoreClick] = useState(1)
    const [allowNews, allowNewsClick] = useState(0)

    useEffect(() => {
        if (allowNews !== 0) {
            dispatch(getNews(loadMoreStart))
        }
    }, [loadMoreStart, allowNews])

    const allowNewsfun = () => {
        allowNewsClick(allowNews + 1)
    }

    const loadMoreFun = () => {
        loadMoreClick(loadMoreStart + 5)
    }

    return (
        <>
            {
                (typeof props.cryptoNews === 'null' || typeof props.cryptoNews === 'undefined') ?
                    <Box className="loadingBox news" >
                        <Switch sx={{ marginLeft: "12%" }} onChange={allowNewsfun} /><Typography sx={{ display: "inline" }} variant="subtitle1">Activate News </Typography>
                        <Loading comType="news" />
                    </Box>
                    : Object.keys(props.cryptoNews).map((p) => {
                        return (
                            <Card className="newsCard">
                                <CardMedia image={props.cryptoNews[p].urlToImage} component="img" alt="alt" height="100" />
                                <CardContent className="newscontent">
                                    <Typography gutterBottom variant="subtitle1">
                                        <a href={props.cryptoNews[p].url}>{props.cryptoNews[p].title}</a>
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px" }} variant="body2">{props.cryptoNews[p].description}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })
            }
            <div className='loadmoreWrapper'><Button size="small" onClick={loadMoreFun}>Load More</Button></div>
            <Global styles={css(externalCss)} />
        </>
    );
};

const mapStateToProps = (state) => {
    try {
        return {
            cryptoNews: state.storeData.cryptoNews
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

export default connect(mapStateToProps)(DashNews);