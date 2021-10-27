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

const letterPositions = function(sentence) {
  const results = {};
  const noSpaceStr = sentence.toLowerCase().match(/[a-z]/g);
  console.log(noSpaceStr);
  noSpaceStr.forEach((char, i) => {
    if (results[char]) {
      results[char] = [...results[char], i];
    } else {
      results[char] = [i];
    }
  });
  return results;
};

const test1Answer = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};

assertArraysEqual((letterPositions("hello")["h"]), test1Answer["h"]);
assertArraysEqual((letterPositions("hello")["e"]), test1Answer["e"]);
assertArraysEqual((letterPositions("hello")["l"]), test1Answer["l"]);
assertArraysEqual((letterPositions("hello")["o"]), test1Answer["o"]);