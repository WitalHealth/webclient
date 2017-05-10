import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import OrderTests from '../containers/OrderTests';
import Header from '../layouts/Header';

const App = () => (
  <Router>
    <div>
      <Route component={Header}/>
      <Route exact path="/" component={OrderTests}/>
      <Route path="/prov/:name" render={({match}) => <h1>{match.params.name}</h1>}/>
      <Route path="/resultat" render={() => <h1>Resultat</h1>}/>
      <Route path="/provguiden" render={() => <h1>Provguiden</h1>}/>
      <Route path="/meddelanden" render={() => <h1>Meddelanden</h1>}/>
      <Route path="/profil" render={() => <h1>Profil</h1>}/>
    </div>
  </Router>
);

export default App;