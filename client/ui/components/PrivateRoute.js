import React from 'react';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route exact {...rest} render={props => (
    auth.isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default withRouter(
  connect(
    state => ({
      auth: state.auth,
    })
  )(PrivateRoute)
);