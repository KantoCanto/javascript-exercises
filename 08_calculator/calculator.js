const add = function(num1, num2) {
  let addition = num1 + num2;
  return addition;
};

const subtract = function(num1, num2) {
	let subtraction = num1 - num2;
  return subtraction;
};

const sum = function(array) {
  let total = 0;
	array.forEach((number) => {
    total = total + number;
  })
  return total;
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

const power = function(num1, num2) {
	let pow = num1 ** num2;
  return pow;
};

const factorial = function(num1) {
	let factor = 1;
  if(num1 == 0){
    factor = 1;
    return factor;
  }
  for(let i = 1; i<= num1; i++){
    factor = factor * i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
