const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  const obj1Length = obj1Keys.length;
  const obj2Length = obj2Keys.length;

  if (obj1Length !== obj2Length) return false;

  let isEqual = true;

  isEqual = obj1Keys.every((key) => {
    const bothArr = Array.isArray(object1[key]) && Array.isArray(object2[key]);
    const bothSameLength = obj1Length === obj2Length;
    const bothObjects = typeof object1[key] === "object" && typeof object2[key] === "object";
    if (bothArr && bothSameLength) {
      return eqArrays(object1[key], object2[key]);
    } else if (bothObjects && bothSameLength) {
      return eqObjects(object1[key], object2[key]);
    } else {
      return object1[key] === object2[key];
    }
  });

  return isEqual;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: [1, 2, 3], z: 1 }, b: 2 }, { a: { y: [1, 2, 3], z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: [1, 2, 3], z: [1, 4] }, b: 2 }, { a: { y: [1, 2, 3], z: [1, 3] }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 }, { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 }), true);

module.exports = eqObjects;