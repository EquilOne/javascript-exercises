const add = function (...numbs) {
  return numbs.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
};

const subtract = function (...numbs) {
  return numbs.reduce((diff, num) => {
    diff -= num;
    return diff;
  });
};

const sum = function (...numbs) {
  if (numbs.length === 0) {
    return 0;
  } else {
    numbs = numbs.flat();
    return numbs.reduce((sum, num) => {
      sum += Number(num);
      return sum;
    }, 0);
  }
};

const multiply = function (...numbs) {
  numbs = numbs.flat();
  if (numbs.includes(0)) {
    return 0;
  }
  return numbs.reduce((prod, num) => {
    prod *= num;
    return prod;
  }, 1);
};

const power = function (...numbs) {
  numbs = numbs.flat();
  if (numbs[0] === 0) {
    return 0;
  } else if (numbs[1] === 0) {
    return 1;
  } else {
    return numbs[0] ** numbs[1];
  }
};

const factorial = function (n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if ((n === 0) | (n === 1)) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
