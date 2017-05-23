import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import LoadingIndicator from './LoadingIndicator';
import Pagination from './Pagination';


const ProductSingles = ({ products }) => (
  <div className="ProductPackages">
    <LoadingIndicator message="Hämtar Prover" isLoading={!products.length}>
      <Pagination data={products} offset={100}>
        <ProductList/>
      </Pagination>
    </LoadingIndicator>
  </div>
);

export default withRouter(
  connect(
    state => ({
      products: state.productSingles
    })
  )(ProductSingles));