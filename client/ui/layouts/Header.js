import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const logoIcon = require('../../assets/images/wital_logo.png');
const testsIcon = require('../../assets/images/test-tube.png');
const resultsIcon = require('../../assets/images/drop.png');
const guideIcon = require('../../assets/images/cardiogram.png');
const messagesIcon = require('../../assets/images/speech-bubble.png');
const userIcon = require('../../assets/images/user.png');
const mapPinIcon = require('../../assets/images/map-pin-silhouette.svg');

const Header = () => (
  <div className="header">
    <div className="header-inner">
      <Link to="/">
        <img src={logoIcon} className="logo"/>
      </Link>
      <ul className="navigation main">
        <li>
          <NavLink exact to="/prover">
            <img className="icon" src={testsIcon} alt="icon"/>
            <div>Boka Prov</div>
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
          <NavLink to="/resultat">
            <img className="icon" src={resultsIcon} alt="icon"/>
            <div>Mina resultat</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/meddelanden">
            <img className="icon" src={messagesIcon} alt="icon"/>
            <div>Meddelanden</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profil">
            <img className="icon" src={userIcon} alt="icon"/>
            <div>Min Profil</div>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;