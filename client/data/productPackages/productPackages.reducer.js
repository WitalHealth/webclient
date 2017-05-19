export default function productPackages(state = [], action = {}) {
  switch(action.type) {
    case 'GET_PRODUCT_PACKS':
      return action.productPacks;
    default:
      return state;
  }
}