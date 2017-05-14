import axios from 'axios';
import { getOrderBadge } from '../badges/order/actions';

export const addToCart = product => {
  return dispatch => {
    axios.post(`https://dev.wital.se/api/cart/${product.id}?sessionid=999`)
      .then(res => {
        dispatch({ type: 'GET_CART', cart: res.data });
        dispatch(getOrderBadge(res.data.length));
      })
      .catch()
  }
};

export const removeFromCart = product => {
  return dispatch => {
    axios.delete(`https://dev.wital.se/api/cart/${product.id}?sessionid=999`)
      .then(res => {
        dispatch({ type: 'GET_CART', cart: res.data });
        dispatch(getOrderBadge(res.data.length));
      })
      .catch()
  }
};

export const fetchCart = () => {
    return dispatch => {
      axios.get('https://dev.wital.se/api/user/active/?sessionid=999')
        .then(res => {
            dispatch({
              type: 'GET_CART',
              cart: res.data.cart,
            });
            dispatch(getOrderBadge(res.data.cart.length));
          }
        )
        .catch(err => console.log(err.message))
    }
  }
  ;
