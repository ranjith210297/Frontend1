import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import Login from './login';
import Predictor from './Predictor';

class LoginButton extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       condition: true
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(condition) {
    //     this.setState( {condition} )
    //   }
render() {

    return (
    <div style={{float: 'right'}}>
           
             <LinkContainer to="/Login">
              <button>Login</button>
            </LinkContainer>

    </div>
);
}
}

export default LoginButton;