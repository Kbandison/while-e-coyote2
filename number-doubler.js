'use strict';

const prompt = require('prompt-sync')();

let number = Number(prompt('Enter the number to be doubled: '));
let total = 0;

console.log(number);

while (number <= 100){

  total = number * number;
  number = total;
  console.log(total);
}
