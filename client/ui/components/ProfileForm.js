import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/user/actions';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = { disabledUserFields: true, disabledProfileFields: true }
  }

  handleUserSubmit(e) {
    e.preventDefault();
    let user = this.setUserValues();
    this.props.updateActiveUser(user);
    this.setEditableUserFields();

  }

  handleProfileSubmit(e) {
    e.preventDefault();
    let user = this.setProfileValues();
    this.props.updateActiveUserProfile(user);
    this.setEditableProfileFields();
  }

  handleCheckboxSubmit(e) {
    let user = this.setProfileValues();
    this.props.updateActiveUserProfile(user);
  }

  setUserValues() {
    let user = this.props.active_user;
    user.email = this.email.value;
    user.phone = this.phone.value;
    return user;
  }

  setProfileValues() {
    let user = this.props.active_user;
    console.log(this.asthma.checked);
    user.profile.height = Number.parseInt(this.height.value);
    user.profile.weight = Number.parseInt(this.weight.value);
    user.profile.waist = Number.parseInt(this.waist.value);
    user.profile.hasDiabetes = (this.diabetes.checked === true) ? true : false;
    user.profile.hasAsthma = (this.asthma.checked === true) ? true : false;
    user.profile.hasAllergia = (this.allergia.checked === true) ? true : false;
    user.profile.hasCAD = (this.cad.checked === true) ? true : 0;
    user.profile.hasCarbonDisease = (this.carbonDisease.checked === true) ? true : false;
    user.profile.hasDepression = (this.depression.checked === true) ? true : false;
    user.profile.isSmoker = (this.smoker.checked === true) ? true : false;

    return user;
  }

  setEditableUserFields() {
    this.setState({disabledUserFields: !this.state.disabledUserFields})
  }

  setEditableProfileFields() {
    this.setState({disabledProfileFields: !this.state.disabledProfileFields})
  }

  render() {
    const { active_user } = this.props;
    return (
      <div>
        { active_user.id && <div>
        <h1 className="profileName">{ active_user.firstName } { active_user.lastName }</h1>
          <div className="cards-container">
            <div className="card-container">
              <div className="contact-container card">
              {
                this.state.disabledUserFields?
                <button type="button" onClick={() => this.setEditableUserFields()}>Edit</button> :
                <button type="button" onClick={(e) => this.handleUserSubmit(e)}>Save</button>
              }
                <p>E-postadress</p>
                <div className="card-field">
                  <input
                    className="userinfo-input"
                    type="text"
                    defaultValue={ active_user.email }
                    ref={inputElem => this.email = inputElem}
                    disabled = {(this.state.disabledUserFields)? "disabled" : ""}
                  />
                </div>
                <p>Mobilnummer</p>
                <div className="card-field">
                  <input
                    className="userinfo-input"
                    defaultValue={ active_user.phone }
                    ref={inputElem => this.phone = inputElem}
                    disabled = {(this.state.disabledUserFields)? "disabled" : ""}
                  />
                </div>
              </div>
              { active_user.profile &&
              <div className="pofile-container card">
                {
                  this.state.disabledProfileFields?
                  <button type="button" onClick={() => this.setEditableProfileFields()}>Edit</button> :
                  <button type="button" onClick={(e) => this.handleProfileSubmit(e)}>Save</button>
                }
                <p>Height</p>
                <div className="card-field">
                <input
                  className="userinfo-input"
                  type="text"
                  defaultValue={ active_user.profile.height }
                  ref={inputElem => this.height = inputElem}
                  disabled = {(this.state.disabledProfileFields)? "disabled" : ""}
                />
                </div>
                <p>Weight</p>
                <div className="card-field">
                <input
                  className="userinfo-input"
                  type="text"
                  defaultValue={ active_user.profile.weight }
                  ref={inputElem => this.weight = inputElem}
                  disabled = {(this.state.disabledProfileFields)? "disabled" : ""}
                />
                </div>
                <p>Waist</p>
                <div className="card-field">
                <input
                  className="userinfo-input"
                  type="text"
                  defaultValue={ active_user.profile.waist }
                  ref={inputElem => this.waist = inputElem}
                  disabled = {(this.state.disabledProfileFields)? "disabled" : ""}
                />
                </div>
              </div>
              }
            </div>
            <div className="toggle-container card-container" id="toggle-container">
              <div className="card-field">
              <p>Diabetes</p>
                <input
                  ref={inputElem => this.diabetes = inputElem}
                  id="toggle-1" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.hasDiabetes === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-1" className="toggle-button"></label>
              </div>
              <div className="card-field">
              <p>Astma</p>
                <input
                  ref={inputElem => this.asthma = inputElem}
                  id="toggle-2" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.hasAsthma === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-2"className="toggle-button"></label>
              </div>
              <div className="card-field">
              <p>Allergi</p>
                <input
                  ref={inputElem => this.allergia = inputElem}
                  id="toggle-3" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.hasAllergia === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-3"className="toggle-button"></label>
              </div>
              <div className="card-field">
              <p>CAD</p>
                <input
                  ref={inputElem => this.cad = inputElem}
                  id="toggle-4" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.hasCAD === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-4"className="toggle-button"></label>
              </div>
              <div className="card-field">
                <p>KOL</p>
                <input
                  ref={inputElem => this.carbonDisease = inputElem}
                  id="toggle-5" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.hasCarbonDisease === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-5"className="toggle-button"></label>
              </div>
              <div className="card-field">
                <p>Depression</p>
                <input
                  ref={inputElem => this.depression = inputElem}
                  id="toggle-6" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.hasDepression === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-6" className="toggle-button"></label>
              </div>
              <div className="card-field">
                <p>Rökare</p>
                <input
                  ref={inputElem => this.smoker = inputElem}
                  id="toggle-7" className="toggle toggle-round"
                  type="checkbox"
                  defaultChecked={(active_user.profile.isSmoker === 1)? true : false}
                  onChange={(e) => this.handleCheckboxSubmit(e)}/>
                <label htmlFor="toggle-7"className="toggle-button"></label>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
};


export default withRouter(
  connect(
    state => ({
      active_user: state.active_user
    }),
    actions
  )(ProfileForm));
