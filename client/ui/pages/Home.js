import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Redirect to="/prover"/>
  </div>
);

export default Home;