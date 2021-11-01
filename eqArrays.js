const recursiveArrEq = (arr1, arr2) => {
  let isEqual = true;

  arr1.forEach((elem, i) => {
    const bothArr = Array.isArray(elem) && Array.isArray(arr2[i]);
    const bothSameLength = elem.length === arr2[i].length;
    if (bothArr && bothSameLength) {
      isEqual = recursiveArrEq(elem, arr2[i]);
    } else {
      isEqual = elem === arr2[i];
    }
  });

  return isEqual;
};

const eqArrays = function(arr1, arr2) {
  return arr1.length !== arr2.length ? false : recursiveArrEq(arr1, arr2);
};

module.exports = eqArrays;




