import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Test from '../components/Test';
import LoadingIndicator from '../components/LoadingIndicator';

export default class extends Component {
  state = {
    tests: [],
    testPackages: [],
    cart: [],
    totalCount: null,
    doAppearAnimation: true
  }

  componentWillMount() {
  }

  render() {
    const { tests, testPackages, cart, totalCount } = this.state;

    return (
      <div className="tests">
        {
          tests.length ?
            <CSSTransitionGroup
              transitionName="test-fade"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={400}
            >
              {
                tests.map((test, i) =>
                  this.notInCart(test) &&
                  <Test
                    key={test.id}
                    test={test}
                    handleClick={() => this.addToCart(test)}
                  />
                )
              }
            </CSSTransitionGroup>
            : <LoadingIndicator message="Hämtar våra prover"/>
        }
      </div>
    )
  }

  notInCart(test) {
    const { cart } = this.state;
    return !cart.find((cartItem => cartItem === test));
  }

  addToCart(test) {
    // this.handleFixed();
    const { cart, tests } = this.state;
    this.setState({ cart: [ test, ...cart ] });
  }
}