import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import * as actions from '../../data/cart/actions';
import LoadingIndicator from './LoadingIndicator';

const ProductList = ({ products, cart, addToCart }) => {
  const notInCart = (product) => {
    return !cart.find((cartItem => cartItem.id === product.id));
  };

  return (
    <div className="products">
      {
        !!products.length &&
          <CSSTransitionGroup
            transitionName="test-fade"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {
              products.map((product, i) =>
                notInCart(product) &&
                <div className="test" key={product.id}>
                  <div className="test-inner">
                    <div className="desc">
                      <h3>{product.name}</h3>
                      <p>{product.excerpt ? product.excerpt.slice(0, 244) : 'ingen beskrvning tillgänglig'} </p>
                    </div>
                    <div className="price-container">
                      <span className="price"> {product.price ? `${product.price}:-` : 'N/A'}</span>
                      <button onClick={() => addToCart(product)}>Lägg till</button>
                    </div>
                  </div>
                </div>
              )
            }
          </CSSTransitionGroup>
      }
    </div>
  )
};

export default withRouter(
  connect(
    state => ({
      cart: state.cart,
    }),
    actions
  )(ProductList));