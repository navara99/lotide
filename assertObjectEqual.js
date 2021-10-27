const eqArrays = function (arr1, arr2) {
  return arr1.length !== arr2.length ? false : arr1.every((elem, i) => elem === arr2[i]);
};

const keyValuesEqual = (object1, object2, obj1Keys) => {
  return obj1Keys.every((key) => {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      return object1[key] === object2[key];
    }
  });
};

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  const obj1Length = obj1Keys.length;
  const obj2Length = obj2Keys.length;
  if (obj1Length !== obj2Length) return false;
  return keyValuesEqual(object1, object2, obj1Keys);
};

const logMessage = (isEqual, obj1, obj2) => {
  const inspect = require("util").inspect;
  const message = isEqual ?
    `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}` :
    `❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`;
  console.log(message);
};

const assertObjectsEqual = function (actual, expected) {
  const isEqual = eqObjects(actual, expected);
  logMessage(isEqual, actual, expected);
}

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