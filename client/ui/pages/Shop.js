import React, { Component } from 'react';
import {
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import ProductPackages from '../components/ProductPackages';
// import ProductSingles from '../components/ProductSingles';
import ProductSinglesCommon from '../components/ProductSinglesCommon';
import DefaultLayout from '../layouts/defaultLayout';
import LoadingIndicator from '../components/LoadingIndicator';

import { fetchProductPacks } from '../../data/productPackages/productPackages.actions';
import { fetchCart } from '../../data/cart/actions';
import { matchQueryToProduct } from '../../utils/search.util';

class Shop extends Component {
  state = {
    isSticky: false,
    searchActive: false,
    filteredPackages: this.props.productPackages,
    filteredSinglesCommon: [],
  }

  componentDidMount() {
    // this.props.fetchCart();
    this.props.fetchProductPacks();
  }

  handleSearch(e) {
    const query = e.target.value;
    const { productPackages, productSinglesCommon } = this.props;
    const searchResults = productPackages.filter((productPackage) => matchQueryToProduct(query, productPackage));
    const searchResults2 = productSinglesCommon.filter((productCommon) => matchQueryToProduct(query, productCommon));

    this.setState({
      searchActive: !!query.length,
      filteredPackages: searchResults,
      filteredSinglesCommon: searchResults2,
    });
  }

  render() {
    const { isSticky, searchActive, filteredPackages, filteredSinglesCommon } = this.state;
    const { match, productPackages, productSinglesCommon } = this.props;

    return (
      <div className="scroll-container" onWheel={() => this.handleFixed()}>
        <DefaultLayout>

          <div className="flex">
            <div className="test-list">
              <div style={{ textAlign: 'center' }}>
              </div>
              <div className="tabs">
                <NavLink exact
                         to="/prover">Provpaket { searchActive ? `(${filteredPackages.length})` : `(${productPackages.length})` }</NavLink>
                <NavLink to="/prover/alla">Enskilda
                  Prover { searchActive ? `(${filteredSinglesCommon.length})` : `(${productSinglesCommon.length})` }</NavLink>
                {/*<NavLink to="/prover/ovanliga">Ovanliga Prover</NavLink>*/}
              </div>
              <div className="search-container">
                <input type="search" placeholder="Hitta prov"
                       onChange={(e) => this.handleSearch(e)}/>
                <div className="icon-search" />
              </div>
              <LoadingIndicator message="Hämtar Prover" isLoading={!productPackages.length}>
                <Switch >
                  <Route exact path={`${match.url}`} render={() => <ProductPackages
                    products={ searchActive ? filteredPackages : productPackages }/>}/>
                  <Route path={`${match.url}/alla`} render={() => <ProductSinglesCommon
                    products={ searchActive ? filteredSinglesCommon : productSinglesCommon }/> }/>
                </Switch>
                {/*<Route path={`${match.url}/ovanliga`} component={ProductSingles}/>*/}
              </LoadingIndicator>
            </div>

            <div className="side-bar">
              <Cart
                handleRemove={(cartItem) => this.removeFromCart(cartItem)}
                isSticky={isSticky}
                ref={(cart) => this.cart = cart}
                btnLink="/beställning"
                btnLabel="Till beställning"
              />
            </div>
          </div>
        </DefaultLayout>
      </div>
    );
  }

  // TODO: better solution cart element from top instead of static pixel height window
  handleFixed() {
    const { isSticky } = this.state;
    const fromTop = 94;
    if ( (window.scrollY > fromTop) && !isSticky ) {
      this.setState({ isSticky: true });
    }
    else if ( (window.scrollY < fromTop) && isSticky ) {
      this.setState({ isSticky: false });
    }
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
      productPackages: state.productPackages,
      productSinglesCommon: state.productSinglesCommon,
      productSingles: state.productSingles,
    }),
    { fetchProductPacks, fetchCart }
  )(Shop));

