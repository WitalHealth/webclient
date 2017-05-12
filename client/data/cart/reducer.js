export default function cart(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        action.product,
        ...state,
      ];
    case 'REMOVE_FROM_CART':
      return state.filter(product => product !== action.product);
    default:
      return state;
  }
}