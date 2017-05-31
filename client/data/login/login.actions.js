import axios from 'axios';

export const login = sn => {
  return dispatch => {
    axios.get(`https://dev.wital.se/api/autentication?sn=${sn}`)
      .then(res => {
        if ( res.status == 201 ) {
          localStorage.setItem('sessionid', res.data);
          dispatch({ type: 'LOGIN', auth: { sessionID: localStorage.getItem('sessionid'), isLoggedIn: true } });
        }
      })
      .catch(e => console.log(e))
  }
};

export const logOut = () => {
  localStorage.removeItem('sessionid');
  return {
    type: 'LOGIN',
    auth: {
      sessionID: '',
      isLoggedIn: false
    }
  }
};

