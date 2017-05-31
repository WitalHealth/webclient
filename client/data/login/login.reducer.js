export default function login(state = [], action = {}) {
  switch(action.type) {
    case 'LOGIN':
      return action.auth;
    default:
      return state;
  }
}
