const assertEqual = function(actual, expected) {
  const message = actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const countLetters = (str) => {
  const letters = {};
  const noSpaceStr = str.toLowerCase().match(/[a-z]/g);
  noSpaceStr.forEach((letter) => letters[letter] = letters[letter] + 1 || 1);
  return letters;
};

console.log(assertEqual(countLetters("lighthouse in the house")["h"], 4));
console.log(assertEqual(countLetters("Joe waited for the train. The train was late.")["e"], 5));