import axios from 'axios';

export const getActiveUser = () => {
  return dispatch => {
    axios.get(`https://dev.wital.se/api/user/active?sessionid=999`)
      .then(res => {
        dispatch({ type: 'GET_ACTIVE_USER', active_user: res.data });
      })
      .catch(e => console.log(e))
  }
};

export const updateActiveUser = active_user => {
  return dispatch => {
    axios.put(`https://dev.wital.se/api/user/${active_user.id}?sessionid=997`, active_user)
      .then(res => {
        dispatch({ type: 'UPDATE_ACTIVE_USER'});
        dispatch(getActiveUser());
      })
      .catch(e => console.log(e))
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
      .catch(e => console.log(e))
  }
};
