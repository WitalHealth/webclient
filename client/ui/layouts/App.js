import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../layouts/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Shop from '../pages/Shop';
import Guides from '../pages/Guides';
import Labs from '../pages/Labs';
import Messages from '../pages/Messages';
import Results from '../pages/Results';
import Order from '../pages/Order';
import Profile from '../pages/Profile';

const App = () => (
  <div className="app">
    <Route component={Header}/>
    <Route exact path="/" component={Login}/>
    <Route path="/prover" component={Shop}/>
    <Route path="/provguiden" component={Guides}/>
    <Route path="/provstationer" component={Labs}/>
    <Route path="/meddelanden" component={Messages}/>
    <Route path="/resultat" component={Results}/>
    <Route path="/beställning" component={Order}/>
    <Route path="/profil" component={Profile}/>
  </div>
);

export default App;
