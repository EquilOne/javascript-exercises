const removeFromArray = function (arr, ...toRemove) {
  const newArray = [];
  arr.forEach((item) => {
    if (!toRemove.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
