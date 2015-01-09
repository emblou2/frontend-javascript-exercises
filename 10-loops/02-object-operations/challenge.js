module.exports.copy = function(object) {
  var newOb = {};
  for (x in object) {
  newOb[x] = object[x];
}
return newOb;
};

module.exports.extend = function(dest, src) {
  for (k in src) {
    dest[k] = src[k];
  }
  return dest;
};

module.exports.hasElems = function(obj, elem) {
  for (var x = 0; x < elem.length; x++) {
    if (obj[elem[x]] === undefined) {
      return false;
    }
  }
  return true;
};