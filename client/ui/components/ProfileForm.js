import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/user/actions';
import ToggleIllness from './ToggleIllness';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = { disabledUserFields: true, disabledProfileFields: true }
  }

  handleUserSubmit(e) {
    e.preventDefault();
    this.setUserValues();

  }

  handleProfileSubmit(e) {
    e.preventDefault();
    this.setProfileValues();
  }

  handleCheckboxSubmit(value, name) {
    this.setProfileToggleValues(value, name);
  }

  setUserValues() {
    let { active_user } = this.props;
    active_user.email = this.email.value;
    active_user.phone = this.phone.value;

    this.props.updateActiveUser(active_user);
    this.setEditableUserFields();
  }

  setProfileValues() {
    let { active_user } = this.props;

    active_user.profile.height = Number.parseInt(this.height.value);
    active_user.profile.weight = Number.parseInt(this.weight.value);
    active_user.profile.waist = Number.parseInt(this.waist.value);

    this.props.updateActiveUserProfile(active_user);
    this.setEditableProfileFields();
  }

  setProfileToggleValues(value, name) {
    let { active_user } = this.props;

    switch ( name ) {
      case 'Diabetes':
        active_user.profile.hasDiabetes = value;
        break;
      case 'Astma':
        active_user.profile.hasAsthma = value;
        break;
      case 'Allergi':
        active_user.profile.hasAllergia = value;
        break;
      case 'CAD':
        active_user.profile.hasCad = value;
        break;
      case 'KOL':
        active_user.profile.hasCarbonDisease = value;
        break;
      case 'Depression':
        active_user.profile.hasDepression = value;
        break;
      case 'Rökare':
        active_user.profile.isSmoker = value;
        break;
      default:
        console.error('no illness by that name', name);
    }

    this.props.updateActiveUserProfile(active_user);
  }

  setEditableUserFields() {
    this.setState({ disabledUserFields: !this.state.disabledUserFields })
  }

  setEditableProfileFields() {
    this.setState({ disabledProfileFields: !this.state.disabledProfileFields })
  }

  render() {
    const { active_user } = this.props;
    const illnesses = active_user.profile ?
      [
        {
          name: 'Diabetes',
          hasIllness: active_user.profile.hasDiabetes
        },
        {
          name: 'Astma',
          hasIllness: active_user.profile.hasAsthma
        },
        {
          name: 'Allergi',
          hasIllness: active_user.profile.hasAllergia
        },
        {
          name: 'CAD',
          hasIllness: active_user.profile.hasCAD
        },
        {
          name: 'KOL',
          hasIllness: active_user.profile.hasCarbonDisease
        },
        {
          name: 'Depression',
          hasIllness: active_user.profile.hasDepression
        },
        {
          name: 'Rökare',
          hasIllness: active_user.profile.isSmoker
        },
      ] : [];

    return (
      <div>
        {
          active_user.id &&
            <div className="cards-container">
              <div className="contact-container">
                <h1 className="profile-name">{ active_user.firstName } { active_user.lastName }</h1>
                <div className="col-1">
                  {
                    this.state.disabledUserFields ?
                      <span className="btn-edit" onClick={() => this.setEditableUserFields()}>Ändra</span> :
                      <span className="btn-edit" type="button" onClick={(e) => this.handleUserSubmit(e)}>Spara</span>
                  }
                  <div className="card-field">
                    <p className="contact-label">E-postadress</p>
                    <input
                      className="contactinfo-input"
                      type="text"
                      defaultValue={ active_user.email }
                      ref={inputElem => this.email = inputElem}
                      disabled={(this.state.disabledUserFields) ? "disabled" : ""}
                    />
                  </div>
                  <div className="card-field">
                    <p className="contact-label">Mobilnummer</p>
                    <input
                      className="contactinfo-input"
                      defaultValue={ active_user.phone }
                      ref={inputElem => this.phone = inputElem}
                      disabled={(this.state.disabledUserFields) ? "disabled" : ""}
                    />
                  </div>
                </div>
                <div className="col-2">
                  {
                    this.state.disabledProfileFields ?
                      <span className="btn-edit" onClick={() => this.setEditableProfileFields()}>Ändra</span> :
                      <span className="btn-edit" onClick={(e) => this.handleProfileSubmit(e)}>Spara</span>
                  }
                  <div className="card-field">
                    <p className="label">Längd
                      <small>(cm)</small>
                    </p>
                    <input
                      className="userinfo-input"
                      type="text"
                      defaultValue={ active_user.profile.height }
                      ref={inputElem => this.height = inputElem}
                      disabled={(this.state.disabledProfileFields) ? "disabled" : ""}
                    />
                  </div>
                  <div className="card-field">
                    <p className="label">Vikt
                      <small>(kg)</small>
                    </p>
                    <input
                      className="userinfo-input"
                      type="text"
                      defaultValue={ active_user.profile.weight }
                      ref={inputElem => this.weight = inputElem}
                      disabled={(this.state.disabledProfileFields) ? "disabled" : ""}
                    />
                  </div>
                  <div className="card-field">
                    <p className="label">Midja
                      <small>(cm)</small>
                    </p>
                    <input
                      className="userinfo-input"
                      type="text"
                      defaultValue={ active_user.profile.waist }
                      ref={inputElem => this.waist = inputElem}
                      disabled={(this.state.disabledProfileFields) ? "disabled" : ""}
                    />
                  </div>
                </div>

              </div>

              <div className="card-container" id="toggle-container">
                {
                  illnesses.map((illness, i) =>
                    <ToggleIllness
                      key={i}
                      name={illness.name}
                      hasIllness={illness.hasIllness}
                      handleChecked={(value, name) => this.handleCheckboxSubmit(value, name)}
                    />
                  )
                }
              </div>
            </div>
        }
      </div>
    );
  }
}


export default withRouter(
  connect(
    state => ({
      active_user: state.active_user
    }),
    actions
  )(ProfileForm));
