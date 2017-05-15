import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/locations/locations.actions';


class Locations extends Component {

  prettyStreet(street) {
    let n = street.indexOf(',');
    return street.substring(0, n !== false ? n : street.length);
  }

  componentWillMount() {
    this.props.fetchLocations();
  }

  render() {
    const { locations } = this.props;

    return (
      <div className="grid">
        {
          locations.map((location, i) =>
            <div key={i} className="grid-item">
              <h3>{ location.city }</h3>
              <div className="name">{ location.name }</div>
              <div className="street">{ location.street }</div>
              <a
                target="_blank"
                href={`https://www.google.se/maps/?q=${location.name}, ${this.prettyStreet(location.street)}`}
              >SE KARTA</a>
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