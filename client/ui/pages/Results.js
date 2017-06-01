import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import moment from 'moment';
import { fetchObservations } from '../../data/observations/observations.actions.js';

import DefaultLayout from '../layouts/defaultLayout';
import LoadingIndicator from '../components/LoadingIndicator';

class Results extends Component {
  state = {
    selectedObservation: '',
    dropdownIsActive: false,
  }

  componentWillMount() {
    this.props.fetchObservations();
  }

  render() {
    const { observations } = this.props;
    const { dropdownIsActive, selectedObservation } = this.state;
    let dropdownClasses = classnames({
      'dropdown-content': true,
      'active': dropdownIsActive,
    });

    if ( dropdownIsActive ) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'scroll';
    }

    return (
      <DefaultLayout>
        <div className="dropdown">
          <div
            className="btn-dropdown"
            onClick={() => this.setState({ dropdownIsActive: !dropdownIsActive })}
          >
            {
              (dropdownIsActive && !selectedObservation) ? 'Visar alla' : (selectedObservation ? selectedObservation : 'Visar alla')
            }
          </div>
          <div className={dropdownClasses}>
            <div className="inner">
              <div
                className="option"
                onClick={() => this.handleSelectTest('')}
              >Visa alla
              </div>
              {
                this.handleUniqueTests(observations).map((testName, i) =>
                  <div
                    className="option"
                    onClick={() => this.handleSelectTest(testName)}
                    key={i}
                  >{testName}</div>
                )
              }
            </div>
          </div>
        </div>
        {
          dropdownIsActive &&
          <div className="click-outside" onClick={() => this.setState({ dropdownIsActive: !dropdownIsActive })}/>
        }

        <div className="table">
          <div className="table-row table-header">
            <div className="col-1">Blodprov</div>
            <div className="col-2">Resultat</div>
            <div className="col-3">Referensintervall</div>
            <div className="col-4">Plats</div>
            <div className="col-5">Datum</div>
          </div>
          <LoadingIndicator
            message="Hämtar dina provresultat"
            isLoading={!observations.length}
          >
            {
              this.handleObservations(observations).map((observation, i) => {
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
                    <div className="col-5">
                      <div className="label">Datum</div>
                      <div className="value">
                        { moment(observation.obervedAt).locale('se').format('L') }
                      </div>
                    </div>
                  </div>
                }
              )
            }
          </LoadingIndicator>
        </div>
      </DefaultLayout>
    )
  }

  handleUniqueTests(observations) {
    const testNames = observations.map((observation, i) =>
      observation.test.custName
    );

    return testNames.filter((test, index) => testNames.indexOf(test) === index);
  }

  handleObservations(observations) {
    const { selectedObservation } = this.state;

    if ( selectedObservation ) {
      return observations.filter(observation => observation.test.custName === selectedObservation)
    }
    else {
      return observations;
    }
  }

  handleSelectTest(testName) {
    this.setState({
      selectedObservation: testName,
      dropdownIsActive: !this.state.dropdownIsActive
    });
  }
}

export default withRouter(
  connect(
    state => ({
      observations: state.observations,
    }),
    { fetchObservations }
  )(Results)
);
