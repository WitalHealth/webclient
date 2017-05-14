import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from '../../data/cart/actions';

const removeIcon = require('../../assets/images/error.png');

const Cart = ({ cart, removeFromCart, isSticky, location }) => {

  let cartClass = classNames({
    'cart': true,
    'fixed': isSticky,
  });

  const totalPrice = () => {
    let totalPrice = 0;
    cart.map(cartItem => totalPrice += cartItem.price);
    return totalPrice;
  };

  return (
    <div
      className={ cartClass }
      onMouseEnter={() => document.body.style.overflow = 'hidden'}
      onMouseLeave={() => document.body.style.overflow = 'scroll'}
    >
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
                  { cartItem.name ? cartItem.name : cartItem.custName}
                  <span className="price">{ `${cartItem.price}:-` }</span>
                  <img className="icon remove" src={removeIcon} alt="ta bort"
                       onClick={() => removeFromCart(cartItem)}/>
                </div>
              </div>
            )
          }
        </CSSTransitionGroup>
      </div>
      <div className="total-price-container">
        <div className="label">Totalt att betala</div>
        <div className="total-price">{ `${totalPrice()}:-` }</div>
      </div>
      <Link to="/beställning" className="btn block">Till beställning</Link>
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