import axios from 'axios';

export const fetchProducts = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/test')
      .then(res => {
        dispatch({ type: 'GET_PRODUCTS', products: res.data.slice(0, 20), })
      })
      .catch(err => console.error(err.message));
  }
};