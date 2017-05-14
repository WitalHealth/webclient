import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from '../layouts/Header';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Guides from '../pages/Guides';
import Locations from '../pages/Locations';
import Messages from '../pages/Messages';
import Results from '../pages/Results';
import Order from '../pages/Order';
import Profile from '../pages/Profile';

const App = () => (
  <Router>
    <div>
      <Route component={Header}/>
      <Redirect to="/prover"/>
      <Route exact path="/" component={Home}/>
      <Route path="/prover" component={Shop}/>
      <Route path="/provguiden" component={Guides}/>
      <Route path="/provstationer" component={Locations}/>
      <Route path="/meddelanden" component={Messages}/>
      <Route path="/resultat" component={Results}/>
      <Route path="/beställning" component={Order}/>
      <Route path="/profil" component={Profile}/>
    </div>
  </Router>
);

export default App;