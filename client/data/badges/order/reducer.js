export default function orderBadge(state = {}, action = {}) {
  switch (action.type) {
    case 'GET_BADGE':
      return {
        count: action.count
      };
    default:
      return state;
  }
}