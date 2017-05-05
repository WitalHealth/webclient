import React, { Component } from 'react';
import { get } from 'axios';
import { DevFrame, DevTool } from '../components/DevTool';
import classNames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { StickyContainer, Sticky } from 'react-sticky';

class OrderTests extends Component {
  state = {
    tests: [],
    cart: [],
  }

  componentWillMount() {
    get('https://dev.wital.se/api/test')
      .then(res => {
        this.setState({ tests: res.data });
      })
      .catch(err => console.error(err.message));
  }

  render() {
    const { tests, cart } = this.state;

    return (
      <div className="page-container">
        <h3>Antal: { tests.length }</h3>
        <DevFrame>
          <DevTool data={tests[ 0 ]} desc="Test model"/>
        </DevFrame>

        <div className="flex">
          <div className="test-list">
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={400}>
              {
                tests.map((test, i) =>
                  this.notInCart(test) &&
                  <div className="test" key={test.id} onClick={() => this.addToCart(test)}>
                    <div className="desc">
                      <h3>{test.name}</h3>
                      <span>{test.description ? test.description : 'ingen beskrvning tillgänglig'} </span>
                    </div>
                    <div className="price"> {test.valueScript ? test.valueScript : '29:-'}</div>
                    <button>Lägg till</button>
                  </div>
                )
              }
            </CSSTransitionGroup>

          </div>
          <StickyContainer>
            <div className="side-bar">
              <Sticky>
                {
                  ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                    return (
                      <div className="cart" style={style}>
                        <div className="cart-inner">
                          <h2>Din beställning</h2>
                          {
                            !cart.length &&
                            <div className="cart-item">
                              Inga prover valda
                            </div>
                          }
                          <CSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={400}>
                            {
                              cart.length &&
                              cart.map((cartItem, i) =>
                                <div className="cart-item" key={cartItem.id}>
                                  { cartItem.name}
                                  <small className="remove" onClick={() => this.removeFromCart(cartItem)}>ta bort
                                  </small>
                                </div>
                              )
                            }
                          </CSSTransitionGroup>
                        </div>
                      </div>
                    )
                  }
                }
              </Sticky>
            </div>
          </StickyContainer>
        </div>
      </div>
    );
  }

  notInCart(test) {
    const { cart } = this.state;
    return !cart.find((cartItem => cartItem === test));
  }

  addToCart(test) {
    const { cart, tests } = this.state;
    this.setState({ cart: [ ...cart, test ] });
  }

  removeFromCart(test) {
    const { cart } = this.state;

    const currentCart = cart.filter((cartItem) => cartItem !== test);
    this.setState({ cart: currentCart });
  }
}

export default OrderTests;

