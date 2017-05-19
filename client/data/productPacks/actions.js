import axios from 'axios';

export const fetchProductPacks = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/product')
      .then(res => {
        dispatch({ type: 'GET_PRODUCT_PACKS', productPacks: res.data.slice(0, 20), })
      })
      .catch(err => console.error(err.message));
  }
};