const eqArrays = require("../eqArrays");
const { expect } = require("chai");

describe("#eqArrays", () => {
  it("should return true when arrays are [[2, 3, [2, 3, [2, 3]]], [4]]", () => {
    const result = eqArrays([[2, 3, [2, 3, [2, 3]]], [4]], [[2, 3, [2, 3, [2, 3]]], [4]]);
    expect(result).to.equal(true);
  });
  it("should return true when nested arrays are equal - [[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]], [[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]]", () => {
    const result = eqArrays([[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]], [[[[[[[[[[[1, 2]]]], [1]]]]]]], [[5]]]);
    expect(result).to.equal(true);
  });
  it("should return false when nested arrays are not equal", () => {
    const result = eqArrays([[2, 3, 7, 8], [4]], [[2, 3, 5, [2, [2, [2, [2]]]]], 4]);
    expect(result).to.equal(false);
  });
  it("should return true when comparing equal arrays - '['1', '2', '3']' to ['1', '2', '3']",()=> {
    const result = eqArrays(['1', '2', '3'], ['1', '2', '3']);
    expect(result).to.equal(true);
  });
  it("should return false for non equal arrays - '['1', '2', '7']' to ['1', '2', '3']",()=> {
    const result = eqArrays(['1', '2', '7'], ['1', '2', '3']);
    expect(result).to.equal(false);
  });
});