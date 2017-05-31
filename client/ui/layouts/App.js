import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Header from '../layouts/Header';
import Shop from '../pages/Shop';
import Guides from '../pages/Guides';
import Labs from '../pages/Labs';
import Messages from '../pages/Messages';
import Results from '../pages/Results';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Home from '../pages/Home';

const App = ({ auth }) => (
  <div className="app">
    {
      auth.isLoggedIn ?
        <div>
          <Route component={Header}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/prover" component={Shop}/>
            <Route path="/provguiden" component={Guides}/>
            <Route path="/provstationer" component={Labs}/>
            <Route path="/meddelanden" component={Messages}/>
            <Route path="/resultat" component={Results}/>
            <Route path="/beställning" component={Order}/>
            <Route path="/profil" component={Profile}/>
            <Route render={() => <Redirect to="/prover" />}/>
          </Switch>
        </div> :
        <div>
          <Route component={Login}/>
        </div>
    }
  </div>
);

export default withRouter(
  connect(
    state => ({
      auth: state.auth,
    })
  )(App)
);
