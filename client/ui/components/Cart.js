import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from '../../data/cart/actions';

const removeIcon = require('../../assets/images/error.png');

const Cart = ({ cart, removeFromCart, isSticky }) => {

  let cartClass = classNames({
    'cart': true,
    'fixed': isSticky,
  });

  return (
    <div
      className={ cartClass }
      onMouseEnter={() => document.body.style.overflow = 'hidden'}
      onMouseLeave={() => document.body.style.overflow = 'scroll'}
    >
      { console.log(isSticky) }
      <h2>Din beställning</h2>
      <div className="cart-inner">
        {
          !cart.length &&
          <div className="cart-item">
            Inga prover valda
          </div>
        }
        <CSSTransitionGroup
          transitionName="cart-fade"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
          {
            cart.length &&
            cart.map((cartItem, i) =>
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-item-inner">
                  { cartItem.name}
                  <img className="icon remove" src={removeIcon} alt="ta bort"
                       onClick={() => removeFromCart(cartItem)}/>
                </div>
              </div>
            )
          }
        </CSSTransitionGroup>
      </div>
      <button className="btn">Gå vidare</button>
    </div>
  )
};

export default withRouter(
  connect(
    state => ({
      cart: state.cart
    }),
    actions
  )(Cart));