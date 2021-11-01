const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Tests

assertEqual(eqArrays([[2, 3, [2, 3, [2, 3]]], [4]], [[2, 3, [2, 3, [2, 3]]], [4]]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4,[3,[3]]]], [[2, 3], [4,[3,[3]]]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[1, 2, 3, [2, [3, [4, [4, 5, [5]]]]]]], [[1, 2, 3, [2, [3, [4, [4, 5, [5]]]]]]]), true);
assertEqual(eqArrays([[2, 3, 7, 8], [4]], [[2, 3, 5, [2, [2, [2, [2]]]]], 4]), false);
assertEqual(eqArrays([[[[[[[[[[[1]]]]]]]]]]], [[1]]), false);
assertEqual(eqArrays([[[[[[[[[[[1]]]]]]]]]], [[5]]], [[[[[[[[[[[1]]]]]]]]]], [[5]]]), true);
assertEqual(eqArrays([[[[[[[[[[[1]]]]]]]]]], [[5]]], [[[[[[[[[[[1]]]]]]]]]], [[5, 7]]]), false);
assertEqual(eqArrays([[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]], [[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]]), true);