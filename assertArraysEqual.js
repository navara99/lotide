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

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([], []);
assertArraysEqual([1, 2], []);
