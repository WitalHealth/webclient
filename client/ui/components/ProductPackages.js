import React from 'react';

import ProductList from './ProductList';
import LoadingIndicator from './LoadingIndicator';

const ProductPackages = ({ products }) => (
  <div className="ProductPackages">
      <ProductList products={products}/>
  </div>
);

export default ProductPackages;