import axios from 'axios';
import { extractProductPackages, extractProductSingles, extractProductSinglesCommon } from './productPackages.adapter';

export const fetchProductPacks = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/product')
      .then(res => {
        dispatch({ type: 'GET_PRODUCT_PACKAGES', products: extractProductPackages(res.data) });
        dispatch({ type: 'GET_PRODUCT_SINGLES', products: extractProductSingles(res.data) });
        dispatch({ type: 'GET_PRODUCT_SINGLES_COMMON', products: extractProductSinglesCommon(res.data) });
      })
      .catch(err => console.error(err.message));
  }
};