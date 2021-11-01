//Assert Arrays Equal

const logMessage = (isEqual, arr1, arr2) => {
  const message = isEqual ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(message);
};

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = arr1.length !== arr2.length ? false : arr1.every((elem, i) => elem === arr2[i]);
  logMessage(isEqual, arr1, arr2);
};

// Without
const without = (mainArr, removeArr) => mainArr.length ? mainArr.filter((elem) => !removeArr.includes(elem)) : [];

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without(["a", "1", 1], ["1"]), ["a", 1]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([3, "4", "a"], []), []);
assertArraysEqual(without([], [3, "4", "a"]), []);
assertArraysEqual(without([3, "4", "a"], [3, "4", "a"]), []);

module.exports = without;