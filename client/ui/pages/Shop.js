import React, { Component } from 'react';
import {
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import Packages from '../components/Packages';
import Products from '../components/Products';

import { fetchProductPacks } from '../../data/productPacks/actions';
import { fetchProducts } from '../../data/products/actions';

class Shop extends Component {
  state = {
    isSticky: false,
  }

  componentDidMount() {
    this.props.fetchProductPacks();
    this.props.fetchProducts();
  }

  render() {
    const { isSticky } = this.state;
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
              <Switch >
                <Route exact path={`${match.url}`} component={Packages}/>
                <Route path={`${match.url}/alla`} component={Products}/>
              </Switch>
            </div>
            <div className="side-bar">
              <Cart
                handleRemove={(cartItem) => this.removeFromCart(cartItem)}
                isSticky={isSticky}
                ref={(cart) => this.cart = cart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TODO: better solution cart element from top instead of static pixel height window
  handleFixed() {
    const { isSticky } = this.state;
    if ( (window.scrollY > 80 + 32) && !isSticky ) {
      this.setState({ isSticky: true });
    }
    else if ( (window.scrollY < 80 + 32) && isSticky ) {
      this.setState({ isSticky: false });
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
    null,
    { fetchProducts, fetchProductPacks }
  )(Shop));

