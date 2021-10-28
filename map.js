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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word + "ay");

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["grounday", "controlay", "toay", "majoray", "tomay"]);