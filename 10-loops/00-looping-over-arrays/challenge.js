module.exports.sumNumbers = function(num) {
  var sum = 0;
  for (var x = 0; x < num.length; x++) {
    sum += num[x];
  }
  return sum;
};




module.exports.splitAndLowerCaseString = function(inputString) {
  var out = inputString.split(',');
  for (var x = 0; x < out.length; ++x) {
    out[x] = out[x].toLowerCase();
  }
  return out;
};
  
module.exports.addIndex = function(newArray) {
  var out = [];
  for (var x = 0; x < newArray.length; x++) {
    out.push(x + " is " + newArray[x]);
  }
  return out;
};







