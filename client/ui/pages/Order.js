import React from 'react';
import Cart from '../components/Cart';
import DefaultLayout from '../layouts/defaultLayout';

export default () => (
  <DefaultLayout>
    <Cart btnLabel="Tillbaka till prover" btnLink="/prover"/>
  </DefaultLayout>
);
