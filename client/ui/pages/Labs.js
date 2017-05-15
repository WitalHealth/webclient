import React from 'react';
import Locations from '../../ui/components/Locations';
import DefaultLayout from '../layouts/defaultLayout';

export default () => (
  <DefaultLayout>
    <div className="search-input">
      <input type="search" placeholder="Hitta din station"/>
    </div>
    <Locations/>
  </DefaultLayout>
);
