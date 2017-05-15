import axios from 'axios';

export const fetchLocations = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/station')
      .then(res => {
        dispatch({ type: 'GET_LOCATIONS', locations: res.data, })
      })
      .catch(err => console.error(err.message));
  }
};
