import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

class Login extends Component {

  render() {
    return (
      <div className="page-container">
        <LoginForm />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Login));
