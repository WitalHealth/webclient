import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductList from './ProductList';

const ProductPackages = ({ products }) => (
  <div className="ProductPackages">
    <ProductList products={products}/>
  </div>
);

export default withRouter(
  connect(
    state => ({
      products: state.productPackages
    })
  )(ProductPackages));