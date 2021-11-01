const assertEqual = require("./assertEqual");

const countLetters = (str) => {
  const letters = {};
  const noSpaceStr = str.toLowerCase().match(/[a-z]/g);
  noSpaceStr.forEach((letter) => letters[letter] = letters[letter] + 1 || 1);
  return letters;
};

assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("Joe waited for the train. The train was late.")["e"], 5);

module.exports = countLetters;