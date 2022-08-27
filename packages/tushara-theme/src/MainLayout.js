import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { connect } from "frontity"
import Switch from "@frontity/components/switch";
import Link from "@frontity/components/link"
import { Global, css } from "frontity"; 
import React, {useState, useEffect} from 'react';

import externalCss from './App.css';
import EntryPoint from './EntryPoint.js';
import Test from './Test.js';


const drawerWidth = 240;

const MainLayout = (state) => {
  console.log("in main.......................................")
  console.log(state)

  const menuClick = (str) =>{
    state.actions.router.set(str)
  }
  return (
    <>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar>
                <Typography variant="h6" noWrap component="div">Website Name</Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', boxShadow:"rgb(0 0 0 / 40%) 3px 16px 15px -1px" },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                    <Link className="menu" onClick={()=>state.actions.router.set("/")}>Dashboard</Link>                
                    <Link className="menu" onClick={()=>state.actions.router.set("/news")}>News</Link>                            
                    <Link className="menu" link="/">History</Link>
                    <Link className="menu" link="/">Account</Link>
                    <Link className="menu" link="/">Exchanges</Link>  
                    <Link className="menu" link="/">Games</Link>
                    <Link className="menu" link="/">Blockchain</Link>              
              </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Typography paragraph>
                <Switch>
                  <EntryPoint when={state.state.router.link == "/"}/>
                  <Test when={state.state.router.link == "/news/"}/>
                </Switch>
              </Typography>
            </Box>
          </Box>
        <Global styles={css(externalCss)} />
    </>
  );
}

export default connect(MainLayout)