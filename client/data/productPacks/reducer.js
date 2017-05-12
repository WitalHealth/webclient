export default function productPacks(state = [], action = {}) {
  switch(action.type) {
    case 'GET_PRODUCT_PACKS':
      return action.productPacks;
    default:
      return state;
  }
}