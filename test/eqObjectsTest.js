const { expect } = require("chai");
const eqObjects = require("../eqObjects");

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

// { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 }, { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 }), true


describe("#eqObjects", () => {
  it("should return true when objects for equal valid objects", () => {
    const a = { a: "1", b: "2" };
    const b = { b: "2", a: "1" };
    const result = eqObjects(a, b);
    expect(result).to.equal(true);
  });
  it("should return true when nested objects are equal ", () => {
    const a = { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 };
    const b = { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 };
    const result = eqObjects(a,b);
    expect(result).to.equal(true);
  });
  it("should return false when nested objects are not equal ", () => {
    const a = { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 };
    const b = { a: { y: [0, 1, 2, 3, [3]], z: 1 }, b: 2 };
    const result = eqObjects(a,b);
    expect(result).to.equal(false);
  });
  it("should return false when valid objects are not equal", () => {
    const a = { a: "1", b: "2" };
    const b = { b: "7", a: "1" };
    const result = eqObjects(a, b);
    expect(result).to.equal(false);
  });

});