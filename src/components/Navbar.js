import React, { Component } from "react";
import {   Link } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from '../backend';
import { userActions } from '../actions';
class Navbar extends Component{

render(){
    const { user } = this.props;
    console.log(this.props);
return (
<>
   

    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
        {/* <a className="navbar-brand" href="#">USERS</a> */}
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                {user?<><li className="nav-item">
                    <Link to="/dashboard"  className="nav-link">Home</Link>
                </li><li className="nav-item">
                <Link onClick={this.props.logout}  className="nav-link">Logout</Link>
                </li></>: <><li className="nav-item">
                    {/* <a className="nav-link" href="#">Login</a> */}
                    <Link to="/"  className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                <Link to="/signup"  className="nav-link">Register</Link>
                </li></>}
               
            </ul>

        </div>
    </div>
</nav>
</>
)
}
}

function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}


const actionCreators = {
    logout: userActions.logout
};

export default connect(mapState,actionCreators)(Navbar);