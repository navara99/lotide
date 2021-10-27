const assertEqual = function (actual, expected) {
  const message = actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const eqObjects = function (object1, object2) {
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;

  if (obj1Length !== obj2Length) return false;


}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false)