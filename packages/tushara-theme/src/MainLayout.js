import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { connect } from "frontity"
import Switch from "@frontity/components/switch";
import Link from "@frontity/components/link"
import { Global, css } from "frontity"; 
import React, {useState, useEffect, useMemo} from 'react';

import externalCss from './App.css';
import EntryPoint from './EntryPoint.js';
import Articles from './component/Articles.js';
import Post from './component/Post.js';

const drawerWidth = 240;

const MainLayout = (state) => {
  const data = state.state.source.get(state.state.router.link);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  useEffect(() =>{
    console.log("in main.......................................")
    console.log(state)
  },[])

  return (
    <>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar className='headerToolbar'>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>                
                <Typography variant="h6" noWrap component="div">Website Name</Typography>
              </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                className="appDrawer"
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                    <Link onClick={handleDrawerClose} className={state.state.router.link == "/"? "menu selected" : "menu"} link="/" >Dashboard</Link>                
                    <Link onClick={handleDrawerClose} className={state.state.router.link == "/articles/"? "menu selected" : "menu"} link="/articles/" >Articles</Link>                            
                    <Link className={state.state.router.link == "/news"? "menu selected" : "menu"} link="/" >News</Link> 
                    <Link className={state.state.router.link == "/blockchain"? "menu selected" : "menu"} link="/" >Blockchain</Link> 
                    <Link className={state.state.router.link == "/cryptogame"? "menu selected" : "menu"} link="/" >Crypto Game</Link> 
                    <Link className={state.state.router.link == "/cryptohistory"? "menu selected" : "menu"} link="/" >Crypto History</Link>                            
                    <Link className={state.state.router.link == "/cryptoapr"? "menu selected" : "menu"} link="/" >Crypto APR</Link>                  
                         
              </Box>          
            </Drawer>            
            <Drawer
              variant="permanent"
              className="appDrawer"
              open
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block' },
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', boxShadow:"rgb(0 0 0 / 40%) 3px 16px 15px -1px" },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                    <Link className={state.state.router.link == "/"? "menu selected" : "menu"} link="/" >Dashboard</Link>                
                    <Link className={state.state.router.link == "/articles/"? "menu selected" : "menu"} link="/articles/" >Articles</Link>                            
                    <Link className={state.state.router.link == "/news"? "menu selected" : "menu"} link="/" >News</Link> 
                    <Link className={state.state.router.link == "/blockchain"? "menu selected" : "menu"} link="/" >Blockchain</Link> 
                    <Link className={state.state.router.link == "/cryptogame"? "menu selected" : "menu"} link="/" >Crypto Game</Link> 
                    <Link className={state.state.router.link == "/cryptohistory"? "menu selected" : "menu"} link="/" >Crypto History</Link>                            
                    <Link className={state.state.router.link == "/cryptoapr"? "menu selected" : "menu"} link="/" >Crypto APR</Link>                  
                         
              </Box>  
            </Drawer>
            <Box className="componenSwitch" component="main" sx={{ width:"100%" }}>
              <Toolbar />
                <Switch>
                  <EntryPoint when={state.state.router.link == "/"}/>
                  <Articles when={state.state.router.link == "/articles/"}/>
                  <Post when={data.isPostType} />
                </Switch>
            </Box>
          </Box>
        <Global styles={css(externalCss)} />
    </>
  );
}

export default connect(MainLayout)