const eqObjects = require("./eqObjects");
const inspect = require("util").inspect;

const logMessage = (isEqual, obj1, obj2) => {
  const message = isEqual ?
    `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}` :
    `❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`;
  console.log(message);
};

const assertObjectsEqual = function(actual, expected) {
  const isEqual = eqObjects(actual, expected);
  logMessage(isEqual, actual, expected);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;