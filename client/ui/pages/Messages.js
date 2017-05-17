import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';

const GridItem = () => (
  <div className="grid-item">
    <h1 className="city">Stadsnamn</h1>
    <div className="name">Labbets namn</div>
    <div className="street">gatuadress 1</div>
  </div>
);

export default () => (
  <DefaultLayout>
    <div id="grid">
     <GridItem/>
     <GridItem/>
     <GridItem/>
     <GridItem/>
     <GridItem/>
     <GridItem/>
     <GridItem/>
     <GridItem/>
     <GridItem/>
    </div>
  </DefaultLayout>
);
