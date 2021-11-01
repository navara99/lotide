const assertArraysEqual = require("../assertArraysEqual");

// Tests

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([], []);
assertArraysEqual([1, 2], []);