export default function productSingles(state = [], action = {}) {
  switch(action.type) {
    case 'GET_PRODUCT_SINGLES':
      return action.products;
    default:
      return state;
  }
}