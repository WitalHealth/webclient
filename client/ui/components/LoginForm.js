import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/login/login.actions';

import LoginLoadingIndicator from '../components/LoginLoadingIndicator';

class LoginForm extends Component {
  state = {
    isLoading: false,
  }

  render() {
    const { isLoading } = this.state;
    const { isLoggedIn } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if ( isLoggedIn ) {
      return <Redirect to={from}/>;
    }

    return (
      <div className="login-container">
        <div className="inner">
          <div className="login-logo"/>
          <form className="login-form" onSubmit={(e) => this.handleLogin(e)}>
            <input
              type="text"
              id="ssn"
              maxLength="12"
              placeholder="ååååmmddxxxx"
              title="ååååmmddxxxx"
              required
            />

            <button type="submit" className="login-button">
              {
                isLoading ? <LoginLoadingIndicator/> : 'Logga in'
              }
            </button>
          </form>
        </div>
      </div>
    );
  }

  handleLogin(e) {
    e.preventDefault();
    var sn = e.target.ssn.value;
    this.props.login(this.formatSn(sn));
    this.setState({ isLoading: true });
  }

  formatSn(sn) {
    return [ sn.slice(0, 8), '-', sn.slice(8) ].join('');
  }
}

export default withRouter(
  connect(
    state => ({
      isLoggedIn: state.auth.isLoggedIn
    }),
    actions
  )(LoginForm));
