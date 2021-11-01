const assertArraysEqual = require("./assertArraysEqual");

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

// Explanation

// First flatten call adds flatten([1, 2, [3, 4], 5, [6]]) to the call stack
// Second call is within the loop when the array element is another array
// This call adds the flatten to the top of the call stack with new params => flatten([[3, 4])
// 3 and 4 get pushed to the flattenedArr and the flattenedArr gets returned .
// flatten([[3, 4]) pops out of the call stack
// loop through the returned array and add items into the flattenedArr in the first call in the stack (flatten([1, 2, [3, 4], 5, [6]]))
// Repeat until loop in initial function call ends, then return the total array

assertArraysEqual(flatten([2, [3, 4, [5, 8]], 5, ["a"]]), [2, 3, 4, 5, 8, 5, "a"]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([3]), [3]);

module.exports = flatten;