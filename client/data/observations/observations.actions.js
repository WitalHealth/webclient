import axios from 'axios';

export function fetchObservations() {
  return dispatch =>
    axios.get("https://dev.wital.se/api/user/active?sessionid=999")
      .then(res => {
        dispatch({
          type: "GET_OBSERVATIONS",
          observations: res.data.observations
        })
      })
      .catch(err => console.error(err.message))
}