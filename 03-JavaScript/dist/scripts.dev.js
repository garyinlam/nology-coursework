"use strict";

//1
function isNumberPositive(number) {
  var isPositive;

  if (number >= 0) {
    isPositive = true;
  } else {
    isPositive = false;
  }

  return isPositive;
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10)); //2

function convertDaysToAge(days) {
  var years = Math.floor(days / 365);
  return years;
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));