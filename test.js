const prompt = require('prompt-sync')();

var fib = function (n) {
  var a = 0, b = 1, f = 1, i = 2;
  var arr = [];
  while (f < n) {
    arr.push(f);
    f = a + b;
    a = b;
    b = f;
    i++;
  }
  return arr;
}
var fibArr = fib(20);
console.log(fibArr);