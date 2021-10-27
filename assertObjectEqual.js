const keyValuesEqual = (object1, object2, obj1Keys) => {
  return obj1Keys.every((key) => {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      return object1[key] === object2[key];
    }
  });
};

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  const obj1Length = obj1Keys.length;
  const obj2Length = obj2Keys.length;
  if (obj1Length !== obj2Length) return false;
  return keyValuesEqual(object1, object2, obj1Keys);
};

const logMessage = (isEqual, arr1, arr2) => {
  const message = isEqual ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(message);
};

const assertObjectsEqual = function(actual,expected) {
  const isEqual = eqObjects(actual,expected);
  logMessage(isEqual);
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);