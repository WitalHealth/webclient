import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import LoadingIndicator from './LoadingIndicator';

const ProductSinglesCommon = ({ products }) => (
  <div className="ProductPackages">
    <LoadingIndicator message="Hämtar Prover" isLoading={!products.length}>
      <ProductList products={products}/>
    </LoadingIndicator>
  </div>
);

export default withRouter(
  connect(
    state => ({
      products: state.productSinglesCommon
    })
  )(ProductSinglesCommon));