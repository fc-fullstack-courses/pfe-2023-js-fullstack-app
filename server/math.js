function isIncorrectNumber(num) {
  return typeof num !== 'number' || isNaN(num);
}

function sum(num1, num2) {
  if (isIncorrectNumber(num1) || isIncorrectNumber(num2)) {
    throw new TypeError('incorrect numbers');
  }

  return Number(num1) + Number(num2);
}

module.exports.sum = sum;
