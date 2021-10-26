const logMessage = (isEqual, arr1, arr2) => {
  const message = isEqual ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(message);
};

const eqArrays = function(arr1, arr2) {
  return arr1.length !== arr2.length ? false : arr1.every((elem, i) => elem === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  logMessage(isEqual, arr1, arr2);
};


// Middle

const getMiddleIndex = (arr) => Math.floor((arr.length - 1) / 2);

const getMiddleArr = (middleIndex, arr) => arr.length % 2 !== 0 ? [arr[middleIndex]] : [arr[middleIndex], arr[middleIndex + 1]];

const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) return [];
  const middleIndex = getMiddleIndex(arr);
  const middleArr = getMiddleArr(middleIndex, arr);
  return middleArr;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);

