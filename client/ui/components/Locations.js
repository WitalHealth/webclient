import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../data/locations/locations.actions';
import { matchQueryToLocation } from '../../utils/search.util';

class Locations extends Component {
  state = {
    filteredLocations: [],
    searchActive: false,
  }

  componentWillMount() {
    this.props.fetchLocations();
  }

  prettyStreet(street) {
    let n = street.indexOf(',');
    return street.substring(0, n !== -1 ? n : street.length);
  }

  handleSearch(e) {
    const query = e.target.value;
    const { locations } = this.props;
    const searchResults = locations.filter((location) => matchQueryToLocation(query, location));

    if ( !searchResults.length && query.length ) {
      this.setState({ filteredLocations: [], searchActive: !!query.length });
    }
    else {
      this.setState({ filteredLocations: searchResults, searchActive: !query.length });
    }
  }

  renderLocations(locations) {
    return locations.map((location, i) =>
      <div key={i} className="grid-item">
        <h3>{ location.city }</h3>
        <div className="name">{ location.name }</div>
        <div className="street">{ location.street }</div>
        <a
          target="_blank"
          href={`https://www.google.se/maps/?q=${location.name}, ${this.prettyStreet(location.street)}`}
        >Se karta och mer information</a>
      </div>);
  }

  render() {
    const { locations } = this.props;
    const { filteredLocations, searchActive } = this.state;

    return (
      <div className="locations">
        <div className="search-container">
          <input type="search" placeholder="Hitta lab" onChange={(e) => this.handleSearch(e)}/>
          <div className="icon-search" />
        </div>
        <div style={{ textAlign: 'center' }}>
          {
            (searchActive && !filteredLocations.length) &&
            'Hittade ingen provstation'
          }
        </div>

        <div className="grid">
          {
            (!searchActive && !filteredLocations.length) ?
              this.renderLocations(locations) :
              this.renderLocations(filteredLocations)
          }
        </div>
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