import axios from 'axios';
import { getOrderBadge } from '../badges/order/actions';

export const getActiveUser = () => {
  return dispatch => {
    axios.get(`https://dev.wital.se/api/user/active?sessionid=999`)
      .then(res => {
        dispatch({ type: 'GET_ACTIVE_USER', active_user: res.data });
        dispatch({ type: 'GET_CART', cart: res.data.cart });
        dispatch({ type: 'GET_OBSERVATIONS', observations: res.data.observations });
        dispatch(getOrderBadge(res.data.cart.length));
      })
      .catch(err => console.log(err))
  }
};

export const updateActiveUser = active_user => {
  return dispatch => {
    axios.put(`https://dev.wital.se/api/user/${active_user.id}?sessionid=997`, active_user)
      .then(res => {
        dispatch({ type: 'UPDATE_ACTIVE_USER'});
        dispatch(getActiveUser());
      })
      .catch(err => console.log(err))
  }
};

export const updateActiveUserProfile = active_user => {
  let profile = active_user.profile;
  return dispatch => {
    axios.put(`https://dev.wital.se/api/profile?sessionid=999`, profile)
      .then(res => {
        dispatch({ type: 'UPDATE_ACTIVE_USER_PROFILE'});
        dispatch(getActiveUser());
      })
      .catch(err => console.log(err))
  }
};
