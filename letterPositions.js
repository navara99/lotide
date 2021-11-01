// const assertArraysEqual = require("./assertArraysEqual");

const addIndexToArr = (noSpaceStr)=> {
  const results = {};
  noSpaceStr.forEach((char, i) => {
    if (results[char]) {
      results[char] = [...results[char], i];
    } else {
      results[char] = [i];
    }
  });
  return results;
};

const letterPositions = function(sentence) {
  const noSpaceStr = sentence.toLowerCase().match(/[a-z]/g);
  const finalResult = addIndexToArr(noSpaceStr);
  return finalResult;
};

// const test1Answer = {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4]
// };

// assertArraysEqual((letterPositions("hello")["h"]), test1Answer["h"]);
// assertArraysEqual((letterPositions("hello")["e"]), test1Answer["e"]);
// assertArraysEqual((letterPositions("hello")["l"]), test1Answer["l"]);
// assertArraysEqual((letterPositions("hello")["o"]), test1Answer["o"]);

module.exports = letterPositions;