const { expect } = require("chai");
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

  it("should return true when objects for equal valid objects", () => {
    const a = { a: "1", b: "2" };
    const b = { b: "2", a: "1" };
    const result = eqObjects(a, b);
    expect(result).to.deep.equal(true);
  });

  it("should return true when nested objects are equal ", () => {
    const a = { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 };
    const b = { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 };
    const result = eqObjects(a,b);
    expect(result).to.deep.equal(true);
  });

  it("should return false when nested objects are not equal ", () => {
    const a = { a: { y: [0, 1, 2, 3, [1]], z: 1 }, b: 2 };
    const b = { a: { y: [0, 1, 2, 3, [3]], z: 1 }, b: 2 };
    const result = eqObjects(a,b);
    expect(result).to.deep.equal(false);
  });
  
  it("should return false when valid objects are not equal", () => {
    const a = { a: "1", b: "2" };
    const b = { b: "7", a: "1" };
    const result = eqObjects(a, b);
    expect(result).to.deep.equal(false);
  });

});