import axios from 'axios';

export const login = sn => {
  return dispatch => {
    axios.get(`https://dev.wital.se/api/autentication?sn=${sn}`)
      .then(res => {
        if ( res.status == 201 ) {
          dispatch({ type: 'LOGIN', auth: { sessionID: res.data, isLoggedIn: true } });
          localStorage.setItem('sessionid', res.data);
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

