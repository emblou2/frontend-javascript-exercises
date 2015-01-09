module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn() == true) {
    actionFn();
  }

};





module.exports.sumNumbers = function(num) {
  var sum = 0;
  var x = 0;
  while ( x < num.length) {
    sum += num[x];
    x++;
  }
  return sum;
};


  
