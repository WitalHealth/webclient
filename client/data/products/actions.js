import axios from 'axios';

export const fetchProductPackages = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/product')
      .then(res => {
        dispatch({ type: 'GET_PRODUCTS', products: res.data, })
      })
      .catch(err => console.error(err.message));
  }
};