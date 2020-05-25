import React, { Component ,Fragment} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';
import {  Router, Route, Switch } from "react-router-dom";

import { history } from './backend';
import { alertActions } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
}


  render() {
    const { alert } = this.props;
    return (
   
       <div>

{alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }

     <Router history={history}>
<Navbar />
<main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
        <Switch>
        <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
           <Signup />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
    </div>
    </div>

</main>
</Router></div>
  
  );}
}
function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};
// export default App;
const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };