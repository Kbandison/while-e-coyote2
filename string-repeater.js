'use strict';

const prompt = require('prompt-sync')();

let string = String(prompt('Enter your string: '));
let newString = '';
 
while (string.length < 9) {
  newString += string;

  if(newString.length > 9){
    console.log(newString + '/');
    break;
  }
  console.log(newString);
 }