import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/login/login.actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if(isLoggedIn) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login-container">
          <img src="/./images/wital_logo.png" className="login-logo"/>
          <form className="login-form" onSubmit={(e) => this.handleLogin(e)}>
            <input type="text" id="ssn" pattern=".{12,12}" maxLength="12" className="ssn" placeholder="ååååmmddxxxx" />
            <input type="submit" className="login-button" value="Login"/>
          </form>
      </div>
    );
  }

  handleLogin(e) {
    e.preventDefault();
    var sn = e.target.ssn.value;
    this.props.login(this.formatSn(sn));
  }

  formatSn(sn) {
    return [sn.slice(0,8), '-', sn.slice(8)].join('');
  }
}

export default withRouter(
  connect(
    state => ({
      isLoggedIn: state.auth.isLoggedIn
    }),
    actions
  )(LoginForm));
