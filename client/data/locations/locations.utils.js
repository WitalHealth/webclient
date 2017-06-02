export function sortLabsByCity(list) {
  return list.sort(function (a, b) {
    var cityA = a.city.toUpperCase();
    var cityB = b.city.toUpperCase();
    if ( cityA < cityB ) {
      return -1;
    }
    if ( cityA > cityB ) {
      return 1;
    }
    return 0;
  });
}