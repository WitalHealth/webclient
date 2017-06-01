import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames';

import DefaultLayout from '../layouts/defaultLayout';
import {fetchObservations} from '../../data/observations/observations.actions.js';

class Results extends Component {

  componentWillMount() {
    this.props.fetchObservations();
  }

  render() {
    const {observations} = this.props;

    const testNames = observations.map((observation, i) =>
      observation.test.custName
    );

    const uniqueTests = testNames.filter((test, index) => {
        console.log(testNames.indexOf(test) === index);
        return testNames.indexOf(test) === index;
      }
    );

    return (
      <DefaultLayout>
        <div className="dropdown">
          <div className="dropbtn">Välj prov</div>
          <div className="dropdown-content">
            <div>{
             uniqueTests.map((uT, i) =>
              <a key={i} onClick={(e) => this.showTest(e, uT)}>{uT}</a>
            )
          }</div>
          </div>
        </div>

        <div className="table">
          <div className="table-row table-header">
            <div className="col-1">Blodprov</div>
            <div className="col-2">Resultat</div>
            <div className="col-3">Referensintervall</div>
            <div className="col-4">Plats</div>
          </div>
          {
            observations.map((observation, i) => {
                let valueClasses = classnames({
                  'col-2': true,
                  'warning': !observation.within,
                });

                return <div key={i} className="table-row">
                  <div className="col-1">
                    <div className="label">Blodprov</div>
                    <div className="value">{ observation.test.custName }</div>
                  </div>
                  <div className={valueClasses}>
                    <div className="label">Resultat</div>
                    <div className="value">
                      { observation.value || 'Inget värde' }
                      <span className="unit">{ observation.test.unit}</span>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="label">Referensintervall</div>
                    <div className="value">
                      { observation.min || 0 } - { observation.max }
                      <span className="unit">{ observation.test.unit}</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="label">Plats</div>
                    <div className="value">
                      { observation.location || 'Ingen plats angiven' }
                    </div>
                  </div>
                </div>
              }
            )
          }
        </div>
      </DefaultLayout>
    )
  }

  showTest(e, tests) {
    e.preventDefault();
    console.log('hey', tests);
  }
}

export default withRouter(
  connect(
    state => ({
      observations: state.observations,
    }),
    {fetchObservations}
  )(Results)
);
