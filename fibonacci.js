'use strict';

const prompt = require('prompt-sync')();

let n = Number(prompt('Enter number: '));
let x = 0;
let y = 1;
let value;
let z = 0;
console.log(x);
console.log(y);

while (z < n - 2){
  value = x + y;
  x = y;
  y = value;
  console.log(value);
  z++;
}