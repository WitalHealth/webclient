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
import Profile from '../pages/Profile';
import Results from '../pages/Results';

const App = () => (
  <Router>
    <div>
      <Route component={Header}/>
      <Redirect to="/prover"/>
      <Route exact path="/" component={Home}/>
      <Route path="/prover" component={Shop}/>
      <Route path="/provguiden" component={Guides}/>
      <Route path="/provstationer" component={Locations}/>
      <Route path="/resultat" component={Results}/>
      <Route path="/meddelanden" component={Messages}/>
      <Route path="/profil" component={Profile}/>
    </div>
  </Router>
);

export default App;