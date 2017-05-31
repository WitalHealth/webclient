import cart from './cart/reducer';
import productPackages from './productPackages/productPackages.reducer';
import productSingles from './productSingles/productSingles.reducer';
import productSinglesCommon from './productSinglesCommon/productSinglesCommon.reducer';
import orderBadge from './badges/order/reducer';
import locations from './locations/locations.reducer';
import active_user from './user/reducer'
import auth from './login/login.reducer';

export {
  cart,
  productPackages,
  productSingles,
  productSinglesCommon,
  orderBadge,
  active_user,
  locations,
  auth
}
