import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import TestPackages from '../components/TestPackages';

import * as actions from '../../data/products/actions';

class Shop extends Component {
  state = {
    tests: [],
    testPackages: [],
    cart: [],
    totalCount: null,
    doAppearAnimation: true
  }

  componentDidMount() {
    this.props.fetchProductPackages();
  }

  render() {
    const { tests, cart, totalCount } = this.state;
    const { match } = this.props;

    return (
      <div className="scroll-container" onWheel={() => this.handleFixed()}>
        <div className="page-container">
          <div className="tabs">
            <NavLink to="/prover">Provpaket</NavLink>
            <NavLink to="/prover/alla">Enskilda Prover</NavLink>
          </div>


          <div className="flex">
            <div className="test-list">
              <Switch>
                <Route exact path={`${match.url}`} component={TestPackages}/>
                {/*<Route exact path="/beställ/prover" render={() => <h1>prover</h1>}/>*/}
              </Switch>
            </div>
            <div id="side-bar" className="side-bar">
              <Cart
                handleRemove={(cartItem) => this.removeFromCart(cartItem)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleFixed() {
    if ( window.scrollY > 62 + 32 ) {
      this.cart.style.position = 'fixed';
    } else {
      this.cart.style.position = 'static';
    }
  }

  notInCart(test) {
    const { cart } = this.state;
    return !cart.find((cartItem => cartItem === test));
  }

  addToCart(test) {
    this.handleFixed();
    const { cart, tests } = this.state;
    this.setState({ cart: [ test, ...cart ] });
  }

  removeFromCart(test) {
    const { cart } = this.state;

    const currentCart = cart.filter((cartItem) => cartItem !== test);
    this.setState({ cart: currentCart });
  }
}

export default withRouter(
  connect(
    state => ({
      products: state.products,
    }), actions)(Shop));

