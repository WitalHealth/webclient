import axios from 'axios';

export const fetchLocations = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/station')
      .then(res => {
        const locations = res.data;
        locations.sort(function(a, b) {
          var cityA = a.city.toUpperCase();
          var cityB = b.city.toUpperCase();
          if (cityA < cityB) {
            return -1;
          }
          if (cityA > cityB) {
            return 1;
          }
          return 0;
        });
        dispatch({ type: 'GET_LOCATIONS', locations })
      })
      .catch(err => console.error(err.message));
  }
};
