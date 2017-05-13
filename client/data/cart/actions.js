import axios, { get } from 'axios';

export const addToCart = product => ({ type: 'ADD_TO_CART', product });
export const removeFromCart = product => ({ type: 'REMOVE_FROM_CART', product });

export const fetchCart = () => {
  return dispatch => {
    axios.get('https://dev.wital.se/api/user/active/?sessionid=999')
      .then(res => {
        dispatch({
          type: 'GET_CART',
          cart: res.data.cart
        });
      })
      .catch(err => console.log(err.message))
  }
};
