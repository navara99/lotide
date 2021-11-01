// const assertArraysEqual = require("./assertArraysEqual");

const without = (mainArr, removeArr) => {
  mainArr.length ? mainArr.filter((elem) => !removeArr.includes(elem)) : [];
};

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertArraysEqual(without(["a", "1", 1], ["1"]), ["a", 1]);
// assertArraysEqual(without([], []), []);
// assertArraysEqual(without([3, "4", "a"], []), []);
// assertArraysEqual(without([], [3, "4", "a"]), []);
// assertArraysEqual(without([3, "4", "a"], [3, "4", "a"]), []);

module.exports = without;