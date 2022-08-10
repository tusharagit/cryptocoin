import React from 'react';
import { withRouter } from "react-router";

class Login extends React.Component {
   constructor(props) {
      super(props);   
   }     

  render() {
    return (
      <div className="Login" name="login">
           <div>This is Login Page </div>
      </div>
      );
    }
}
export default withRouter(Login);