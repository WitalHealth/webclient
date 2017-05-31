export default function login(state = [{ sessionID: '', isLoggedIn: false }], action = {}) {
  switch(action.type) {
    case 'LOGIN':
      return action.auth;
    default:
      return state;
  }
}
