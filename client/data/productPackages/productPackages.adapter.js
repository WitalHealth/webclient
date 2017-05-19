export function extractProductPackages(data) {
  return data.filter((p) => p.isMulti);
}

export function extractProductSingles(data) {
  return data.filter((p) => !p.isMulti);
}

export function extractProductSinglesCommon(data) {
  return data.filter((p) => !p.isMulti && p.isCommon);
}