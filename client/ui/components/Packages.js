import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classNames from 'classnames';
import * as actions from '../../data/cart/actions';


const Packages = ({ cart, productPacks, addToCart }) => {
  const notInCart = (product) => {
    return !cart.find((cartItem => cartItem.id === product.id));
  };

  return (
    <div className="products">
      {
        !!productPacks.length && <CSSTransitionGroup
          transitionName="test-fade"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {
            productPacks.map((product, i) =>
              notInCart(product) &&
              <div className="test" key={product.id}>
                <div className={ `test-inner` }>
                  <div className="desc">
                    <h3>{product.name}</h3>
                    <span>{product.description ? product.description : 'ingen beskrvning tillgänglig'} </span>
                  </div>
                  <div className="price"> {product.price ? `${product.price}:-` : 'N/A'}</div>
                  <button onClick={() => addToCart(product)}>Lägg till</button>
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
      productPacks: state.productPacks,
      cart: state.cart,
    }),
    actions
  )(Packages));