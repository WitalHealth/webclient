import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import LoadingIndicator from './LoadingIndicator';

const ProductSinglesCommon = ({ products }) => (
  <div className="ProductPackages">
    <ProductList products={products}/>
  </div>
);

export default ProductSinglesCommon;