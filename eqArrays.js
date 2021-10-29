const assertEqual = function (actual, expected) {
  const message = actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

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

const eqArrays = function (arr1, arr2) {
  return arr1.length !== arr2.length ? false : recursiveArrEq(arr1, arr2);
};

assertEqual(eqArrays([[2, 3, [2, 3, [2, 3]]], [4]], [[2, 3, [2, 3, [2, 3]]], [4]]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[1, 2, 3, [2, [3, [4, [4, 5, [5]]]]]]], [[1, 2, 3, [2, [3, [4, [4, 5, [5]]]]]]]), true);
assertEqual(eqArrays([[2, 3, 7, 8], [4]], [[2, 3, 5, [2, [2, [2, [2]]]]], 4]), false);
assertEqual(eqArrays([[[[[[[[[[[1]]]]]]]]]]], [[1]]), false);
assertEqual(eqArrays([[[[[[[[[[[1]]]]]]]]]], [[5]]], [[[[[[[[[[[1]]]]]]]]]], [[5]]]), true);
assertEqual(eqArrays([[[[[[[[[[[1]]]]]]]]]], [[5]]], [[[[[[[[[[[1]]]]]]]]]], [[5, 7]]]), false);
assertEqual(eqArrays([[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]], [[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]]), true);




