// assertArraysEqual

const logMessage = (isEqual, arr1, arr2) => {
  const message = isEqual ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(message);
};

const eqArrays = function(arr1, arr2) {
  return arr1.length !== arr2.length ? false : arr1.every((elem, i) => elem === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1,arr2);
  logMessage(isEqual, arr1, arr2);
};

// Flatten

const flatten = function(arr) {
  const flattenedArr = [];

  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      const innerArr = flatten(elem);
      innerArr.forEach((innerElem) => {
        flattenedArr.push(innerElem);
      });
    } else {
      flattenedArr.push(elem);
    }
  });

  return flattenedArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([2, [3, 4, [5, 8]], 5, ["a"]]), [2, 3, 4, 5, 8, 5, "a"]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([3]), [3]);