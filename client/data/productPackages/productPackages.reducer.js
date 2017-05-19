export default function productPackages(state = [], action = {}) {
  switch(action.type) {
    case 'GET_PRODUCT_PACKAGES':
      return action.products;
    default:
      return state;
  }
}