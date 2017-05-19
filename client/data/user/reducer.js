export default function profile(state = [], action = {}) {
  switch(action.type) {
    case 'GET_ACTIVE_USER':
      return action.active_user;
    case 'UPDATE_ACTIVE_USER':
      return state;
    case 'UPDATE_ACTIVE_USER_PROFILE':
      return state;
    default:
      return state;
  }
}
