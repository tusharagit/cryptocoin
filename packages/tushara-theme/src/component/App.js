import React from 'react';
import { Global, css } from "frontity"; 
import externalCss from './App.css';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import { Link, Redirect} from "react-router-dom";

import { withRouter } from "react-router";
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import View404 from './pages/View404.js';
import store, { rrfProps } from "./store";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";


class App extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         header: "Note1",
         content: "Content from state...",
         routePath: "view404"
      }
   }
 
  componentDidMount(){
    if (this.props.location.pathname === "/"){this.setState({routePath: 'Dashboard'})}
    if (this.props.location.pathname === "/Login"){this.setState({routePath: 'login'})}
    if (this.props.location.pathname === "/Dashboard"){this.setState({routePath: 'Dashboard'})}
  }

  linkClick1() {this.setState({routePath: "login"})}
  linkClick2() {this.setState({routePath: "Dashboard"})} 

  render() {

    if (this.props.location.pathname == "/"){ return <Redirect to="/Login" /> ;}

    return (
      <div className="App">
      <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <app-header-layout>
          <app-header slot="header" fixed>
              <app-toolbar>
                <div id ="mainTitle" >CryptoCoinBazar = {this.state.routePath}</div>
              </app-toolbar>
          </app-header>

          <app-drawer-layout id="drawerLayout" fullbleed>
              <app-drawer id="drawer" slot="drawer" swipe-open="[narrow]" on-opened-changed="_forDraweropenedChange" transition-duration="500">
                  <app-toolbar>Menu</app-toolbar>
                          <iron-selector id="ironSelector" selected={this.state.routePath} attr-for-selected="name" role="navigation">
                            <Link name="Dashboard" to="/Dashboard" onClick={() => this.linkClick2()}>Dashboard</Link>
                            <Link name="login" to="/Login" onClick={() => this.linkClick1()}>login</Link>                            
                          </iron-selector>              
              </app-drawer>
              <iron-pages 
                  selected={this.state.routePath}
                  attr-for-selected="name"
                  fallback-selection="view404"
                  role="main">
                    <Login name="login"></Login>
                    <Dashboard name="Dashboard"></Dashboard>
                    <View404 name="view404"></View404>
              </iron-pages>            
          </app-drawer-layout>    
        </app-header-layout>      
      </ReactReduxFirebaseProvider>
    </Provider>
    <Global styles={css(externalCss)} />
      </div>
    );
  }
}
export default withRouter(App);