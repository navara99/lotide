const without = require("../without");
const { expect } = require("chai");

describe("#without", () => {
  it("should return [2,3] when inputs are [1, 2, 3] and [1]", () => {
    const result = without([1, 2, 3], [1]);
    expect(result).to.deep.equal([2, 3]);
  });

  it("should return empty array when both inputs are empty arrays", () => {
    const result = without([], []);
    expect(result).to.deep.equal([]);
  });

  it("should always return an empty array when first argument is an empty array", () => {
    const result = without([], ["a", "b", "c"]);
    expect(result).to.deep.equal([]);
  });

  it("should always return first array argument if second argument is empty", () => {
    const result = without(["a","b","c"], []);
    expect(result).to.deep.equal(["a","b","c"]);
  });
  
  it("should always return first array argument if second argument does not contain any matching elements", () => {
    const result = without(["a","b","c"], ["d","e","f"]);
    expect(result).to.deep.equal(["a","b","c"]);
  });
});