// const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  const takenArr = [];
  for (const item of array) {
    if (!callback(item)) {
      takenArr.push(item);
    } else {
      return takenArr;
    }
  }
  return takenArr;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

// const data3 = ["to", "building", "lasagna", "heart", "not", "give"];
// const results3 = takeUntil(data3, x => x.length === 3);
// assertArraysEqual(results3, ["to", "building", "lasagna", "heart"]);

module.exports = takeUntil;

