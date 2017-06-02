import axios from 'axios';
import { extractProductPackages, extractProductSinglesCommon } from './productPackages.adapter';
import { setCache, getCache, isCacheValid } from '../../utils/cache.util';

const PRODUCT_PACKAGES = 'packages';
const PRODUCT_SINGLES_COMMON = 'singles_common';

export const fetchProducts = () => {
  if (isCacheValid(PRODUCT_PACKAGES) && isCacheValid(PRODUCT_SINGLES_COMMON)) {
    return dispatch => {
      console.log('cached products');
      dispatch({
        type: 'GET_PRODUCT_PACKAGES',
        products: getCache(PRODUCT_PACKAGES),
      });
      dispatch({
        type: 'GET_PRODUCT_SINGLES_COMMON',
        products: getCache(PRODUCT_SINGLES_COMMON),
      });
    }
  }
  else {
    return dispatch => {
      axios.get('https://dev.wital.se/api/product')
        .then(res => {
          const productPackages = extractProductPackages(res.data);
          const productSinglesCommon = extractProductSinglesCommon(res.data);

          dispatch({
            type: 'GET_PRODUCT_PACKAGES',
            products: productPackages,
          });
          dispatch({
            type: 'GET_PRODUCT_SINGLES_COMMON',
            products: productSinglesCommon
          });

          setCache(PRODUCT_PACKAGES, productPackages);
          setCache(PRODUCT_SINGLES_COMMON, productSinglesCommon);
        })
        .catch(err => console.error(err.message));
    }
  }
};