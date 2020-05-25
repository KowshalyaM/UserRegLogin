import React, { Component } from "react";
import {   Link } from "react-router-dom";
import { connect } from 'react-redux';

import { userActions } from '../actions';

class Dashaboad extends Component{
render(){
    const { user } = this.props;
    console.log(user);
return (
   <h1 className="dashboardh1">
       Welcome {user.first_name }!!!
   </h1>
)
}
}

function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}



export default connect(mapState)(Dashaboad);
