module.exports.getKeys = function(object) {
  array = [];
  for (var x in object) {
    array.push(x);
  }
  return array;
};

module.exports.getValues = function(object) {
  array = [];
  for (var x in object) {
    array.push(object[x]);
  }
  return array;
};


module.exports.objectToArray = function(object) {
  array = [];
  for (x in object) {
    array.push(x + " is " + object[x]);
  }
  return array;
};