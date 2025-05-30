const reverseString = function (str) {
  const charArr = str.split('');
  const revArr = charArr.reverse();
  const revStr = revArr.join('');

  return revStr;
};

console.log(reverseString('backwards'));

// Do not edit below this line
module.exports = reverseString;
