import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import OrderTests from '../containers/OrderTests';
const logoIcon = require('../assets/images/wital_logo.png');
const testsIcon = require('../assets/images/test-tube.png');
const resultsIcon = require('../assets/images/drop.png');
const guideIcon = require('../assets/images/cardiogram.png');
const messagesIcon = require('../assets/images/speech-bubble.png');
const userIcon = require('../assets/images/user.png');

const Home = () => (
  <div>
    <Header/>
    <div className="gradient"></div>
    <Redirect to="/boka"/>

    <div className="page-container">
      <Switch>
        <Route path="/boka" component={OrderTests}/>
        <Route path="/resultat" render={() => <h1>Resultat</h1>}/>
        <Route path="/provguiden" render={() => <h1>Provguiden</h1>}/>
        <Route path="/meddelanden" render={() => <h1>Meddelanden</h1>}/>
        <Route path="/profil" render={() => <h1>Profil</h1>}/>
      </Switch>
    </div>
  </div>
);

const Header = () => (
  <div className="header">
    <div className="header-inner">
    <img src={logoIcon} className="logo"/>
    <ul className="navigation main">
      <li><NavLink to="/boka">
        <img className="icon" src={testsIcon} alt="icon"/>
        <div>Boka Prov</div>
      </NavLink></li>
      <li><NavLink to="/resultat">
        <img className="icon" src={resultsIcon} alt="icon"/>
        <div>Mina resultat</div>
      </NavLink>
      </li>
      <li><NavLink to="/provguiden">
        <img className="icon" src={guideIcon} alt="icon"/>
        <div>Provguiden</div>
      </NavLink></li>
      <li><NavLink to="/meddelanden">
        <img className="icon" src={messagesIcon} alt="icon"/>
        <div>Meddelanden</div>
      </NavLink></li>
      <li><NavLink to="/profil">
        <img className="icon" src={userIcon} alt="icon"/>
        <div>Min Profil</div>
      </NavLink></li>
    </ul>
    </div>
  </div>
);

export default Home;