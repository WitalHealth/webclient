import cart from './cart/reducer';
import productPackages from './productPackages/productPackages.reducer';
import productSingles from './productSingles/productSingles.reducer';
import productSinglesCommon from './productSinglesCommon/productSinglesCommon.reducer';
import orderBadge from './badges/order/reducer';
import locations from './locations/locations.reducer';
import auth from './login/login.reducer';
import active_user from './user/reducer';
import observations from './observations/observations.reducer';

export {
  cart,
  productPackages,
  productSingles,
  productSinglesCommon,
  orderBadge,
  active_user,
  locations,
  auth,
  observations,
}
