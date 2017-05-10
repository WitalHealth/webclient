import React, { Component } from 'react';
import { get } from 'axios';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { DevFrame, DevTool } from '../components/DevTool';
import LoadingIndicator from '../components/LoadingIndicator';
const removeIcon = require('../assets/images/error.png');

class OrderTests extends Component {
  state = {
    tests: [],
    cart: [],
    totalCount: null,
    doAppearAnimation: true
  }

  componentWillMount() {
    get('https://dev.wital.se/api/test')
      .then(res => {
        this.setState({ tests: res.data.slice(0, 20), totalCount: res.data.length });
      })
      .catch(err => console.error(err.message));
  }

  render() {
    const { tests, cart, totalCount } = this.state;
    const { match } = this.props;

    return (
      <div className="scroll-container" onWheel={() => this.handleFixed()}>
        <div className="page-container">
          <DevFrame>
            <DevTool data={totalCount} desc="Total count"/>
            <DevTool data={tests[ 0 ]} desc="Test model"/>
          </DevFrame>

          <div className="flex">
            <div className="test-list">
              {
                !tests.length ?
                  <div className="test-inner">
                    <CSSTransitionGroup
                      transitionName="test-fade"
                      transitionEnterTimeout={400}
                      transitionLeaveTimeout={400}
                    >
                      {
                        tests.map((test, i) =>
                          this.notInCart(test) &&
                          <div className="test" key={test.id}>
                            <div className="test-inner">
                              <div className="desc">
                                <h3><Link to={`/prov/${test.custName}`}>{test.custName}</Link></h3>
                                <span>{test.description ? test.description : 'ingen beskrvning tillgänglig'} </span>
                              </div>
                              <div className="price"> {test.valueScript ? test.valueScript : '29:-'}</div>
                              <button onClick={() => this.addToCart(test)}>Lägg till</button>
                            </div>
                          </div>
                        )
                      }
                    </CSSTransitionGroup>
                  </div>
                  : <LoadingIndicator message="Hämtar våra prover"/>
              }
            </div>
            {/*<StickyContainer>*/}
            <div id="side-bar" className="side-bar">
              <div
                className="cart"
                ref={cart => this.cart = cart}
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
                            { cartItem.custName}
                            <img className="icon remove" src={removeIcon} alt="ta bort"
                                 onClick={() => this.removeFromCart(cartItem)}/>
                          </div>
                        </div>
                      )
                    }
                  </CSSTransitionGroup>
                </div>
                <button className="btn">Gå vidare</button>
              </div>
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

export default OrderTests;

