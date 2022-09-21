'use strict';

const prompt = require('prompt-sync')();

let userNum= Number(prompt('Enter a number (type 0 to end): '));
let  total = 0;

while (userNum > 0) {
  
  total += userNum;
  userNum = Number(prompt('Enter a new number (type 0 to end): '));
}

console.log(total);