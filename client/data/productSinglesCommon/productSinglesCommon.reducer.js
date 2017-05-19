export default function productSinglesCommon(state = [], action = {}) {
  switch(action.type) {
    case 'GET_PRODUCT_SINGLES_COMMON':
      return action.products;
    default:
      return state;
  }
}