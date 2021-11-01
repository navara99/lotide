const middle = require("../middle");
const { expect } = require("chai");

describe("#middle", () => {

  it("should return middle element for even length array", () => {
    const result = middle([1, 2, 3, 4]);
    expect(result).to.deep.equal([2, 3]);
  });

  it("should return middle element for odd length array", () => {
    const result = middle([1, 2, 3]);
    expect(result).to.deep.equal([2]);
  });

  it("should return an empty array if the input is an array with length 1", () => {
    const result = middle([1]);
    expect(result).to.deep.equal([]);
  })

  it("should return an empty array if input array length is 2", () => {
    const result = middle([1, 2]);
    expect(result).to.deep.equal([]);
  })

  it("should return null if the input is not an array", () => {
    const result = middle(12);
    expect(result).to.equal(null);
  })
})