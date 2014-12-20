module.exports.reversePlusOne = function(x) {
  x.push(1);
  return  x.reverse();
};

module.exports.plusesEverywhere = function(x) {
  var pluses = x.join( '+');
  return pluses;
};

module.exports.arrayQuantityPlusOne = function(x) {
  return (x.length + 1)
};