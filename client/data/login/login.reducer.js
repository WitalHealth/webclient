const initialState = {
  sessionID: localStorage.getItem('sessionid'),
  isLoggedIn: !!localStorage.getItem('sessionid'),
};

export default function login(state = initialState, action = {}) {
  switch(action.type) {
    case 'LOGIN':
      return action.auth;
    default:
      return state;
  }
}
