import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileForm from '../components/ProfileForm.js';
import { getActiveUser } from '../../data/user/actions';

class Profile extends Component {

  componentDidMount() {
    this.props.getActiveUser();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("lol");
  }

  render() {
    return (
      <div className="page-container">
        <ProfileForm />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { getActiveUser }
  )(Profile));
