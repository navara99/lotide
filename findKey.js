const assertEqual = function(actual, expected) {
  const message = actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const findKey = function(data, callback) {
  for (const key in data) {
    const result = callback(data[key]);
    if (result) return key;
  }
};

const test1Data = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const results1 = findKey(test1Data, x => x.stars === 2);
assertEqual(results1, "noma");

const results2 = findKey(test1Data, x => x.stars === 3);
assertEqual(results2, "Akaleri");

const results3 = findKey(test1Data, x => x.stars === 1);
assertEqual(results3, "Blue Hill");

const results4 = findKey(test1Data, x => x.stars === 5);
assertEqual(results4, undefined);