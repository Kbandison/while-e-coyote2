'use strict';

const prompt = require('prompt-sync')();

let n = Number(prompt('Enter number: '));
let x = 0;
let y = 1;
let value;
console.log(x);
console.log(y);

while (x <= n){
  value = x + y;
  x = y;
  y = value;
  
  console.log(value);
}