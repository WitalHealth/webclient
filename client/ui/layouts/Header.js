import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const logoIcon = require('../../assets/images/wital_logo.png');
const testsIcon = require('../../assets/images/test-tube.png');
const cartIcon = require('../../assets/images/cart.png');
const resultsIcon = require('../../assets/images/drop.png');
const guideIcon = require('../../assets/images/cardiogram.png');
const messagesIcon = require('../../assets/images/speech-bubble.png');
const userIcon = require('../../assets/images/user.png');
const mapPinIcon = require('../../assets/images/map-pin-silhouette.svg');

const Header = ({ orderBadge }) => (
  <div className="header">
    <div className="header-inner">
      <Link to="/">
        <img src={logoIcon} className="logo"/>
      </Link>
      <ul className="navigation main">
        <li>
          <NavLink to="/prover">
            <img className="icon" src={testsIcon} alt="icon"/>
            <div>Prover</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/provguiden">
            <img className="icon" src={guideIcon} alt="icon"/>
            <div>Provguiden</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/provstationer">
            <img className="icon" src={mapPinIcon} alt="icon"/>
            <div>Provstationer</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/meddelanden">
            <img className="icon" src={messagesIcon} alt="icon"/>
            <div>Meddelanden</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/resultat">
            <img className="icon" src={resultsIcon} alt="icon"/>
            <div>Resultat</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/beställning">
            <img className="icon" src={cartIcon} alt="icon"/>
            <CSSTransitionGroup
              transitionName="tada"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={400}
            >
              {
                orderBadge.count >= 1 &&
                <div className="badge" key={orderBadge.count}><span>{ orderBadge.count }</span></div>
              }
            </CSSTransitionGroup>
            <div>Beställning</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profil">
            <img className="icon" src={userIcon} alt="icon"/>
            <div>Profil</div>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default withRouter(
  connect(
    state => ({
      orderBadge: state.orderBadge
    }),
  )(Header));