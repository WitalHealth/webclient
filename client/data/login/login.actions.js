import axios from 'axios';

export const login = sn => {
  return dispatch => {
    axios.get(`https://dev.wital.se/api/autentication?sn=${sn}`)
      .then(res => {
        dispatch({ type: 'LOGIN', auth: {sessionID: res.data, isLoggedIn: true }});
      })
      .catch(e => console.log(e))
  }
};
