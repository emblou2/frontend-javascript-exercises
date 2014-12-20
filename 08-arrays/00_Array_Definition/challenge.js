module.exports.newArray = function(a,b,c,d) {
  return [a,b,c,d];
};



module.exports.firstAndLast = function(x) {
  var last = x.length-1;
  return [x[0], x[last]];
};

