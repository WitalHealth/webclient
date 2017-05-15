import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/locations/locations.actions';


class Locations extends Component {

  prettyStreet(street) {
    let n = street.indexOf(',');
    return street.substring(0, n !== -1 ? n : street.length);
  }

  componentWillMount() {
    this.props.fetchLocations();
  }

  render() {
    const { locations } = this.props;

    return (
      <div>
        {
          locations.map((location, i) =>
            <div key={i}>
              <h1>{ location.name }</h1>
              <div>{ location.street }</div>
              <div>{ location.city }</div>
              <a target="_blank"
                 href={`https://www.google.se/maps/?q=${location.name}, ${this.prettyStreet(location.street)}`}>SE
                KARTA</a>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      locations: state.locations
    }),
    actions
  )(Locations));