import React from 'react';
import { withRouter } from "react-router";


class View404 extends React.Component {
   constructor(props) {
      super(props);    
   }   

  render() {
  return (
    <div className="View404" name="view404">
         <div>This is 404 Page</div>
    </div>
    );
  }
}
export default withRouter(View404);

