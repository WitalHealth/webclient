export function matchQueryToLocation(query, location) {
  const tokens = createSearchTokensFromString(`${location.city} ${location.street} ${location.name}`);

  const res = tokens.filter((token) => {
    return !!token.startsWith(query.toLowerCase());
  });

  return !!res.length;
}

export function matchQueryToProduct(query, product) {
  const tokens = createSearchTokensFromString(`${product.name} ${product.excerpt}`);

  const res = tokens.filter((token) => {
    return !!token.startsWith(query.toLowerCase());
  });

  return !!res.length;
}

export function createSearchTokensFromString(str) {
  var separators = [' ', '/'];
  return str.toLowerCase().split(new RegExp(separators.join('|'), 'g'));
}