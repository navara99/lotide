const assertEqual = require("./assertEqual");

const findKeyByValue = (obj, value) => {
  const entriesArr = Object.entries(obj);
  for (const entry of entriesArr) {
    if (entry[1] === value) return entry[0];
  }
  return;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;