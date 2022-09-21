'use strict';

const prompt = require('prompt-sync')();

let x = Number(prompt('Enter number for x: '));
let y = Number(prompt('Enter number for y: '));

while (x > 0) {
  if (x % y == 0) {
    console.log(`${x} is divisible by ${y}`);
    break;
  } else {
    x++;
    console.log(x);
  }
}