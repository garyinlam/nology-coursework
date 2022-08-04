//1

function isNumberPositive (number) {
  let isPositive;
  if (number >= 0) {
    isPositive = true;
  } else {
    isPositive = false;
  }
  return isPositive;
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

//2

function convertDaysToAge (days) {
  const years = Math.floor(days/365);
  return years;
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

//3

function getLargestNumber (number1, number2, number3) {
  let largest;
  if(number1 > number2 && number1 > number3) {
    largest = number1;
  } else if (number2 > number1 && number2 > number3) {
    largest = number2;
  } else if (number3 > number1 && number3 > number2) {
    largest = number3;
  }
  return largest;
}

console.log(getLargestNumber(2,1,4));
console.log(getLargestNumber(6,2,3));

//4

function getLastName (nameArray) {
  return nameArray[nameArray.length-1]
}

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));

//5

function allNumbersPositive (numberArray) {
  let isAllPositive = true;
  for (let i = 0; i < numberArray.length; i++){
    if(numberArray[i] < 0) {
      isAllPositive = false;
    }
  }
  return isAllPositive;
}

console.log(allNumbersPositive([2,4,5]));
console.log(allNumbersPositive([-5,4,6]));