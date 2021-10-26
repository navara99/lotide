const assertEqual = function(actual, expected) {
  const message = actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

// Test Code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("abcdef", 1);
assertEqual("1", 1);
assertEqual("coding", "coding");
assertEqual("", "");
