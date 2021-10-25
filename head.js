// assertEqual.js

const assertEqual = function(actual, expected) {
  const message = actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

// Test Code

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("abcdef", 1);
// assertEqual("1", 1);
// assertEqual("coding", "coding");

/**********************************************************************/

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Javascript"]), "Javascript");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Python", "Ruby"]), "Ruby");
