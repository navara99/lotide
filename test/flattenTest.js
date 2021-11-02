const flatten = require("../flatten");
const { expect } = require("chai");

describe("#flatten", () => {
  
  it("should flatten nested arrays - [2, [3, 4, [5, 8]], 5, ['a']]", () => {
    const result = flatten([2, [3, 4, [5, 8]], 5, ["a"]]);
    expect(result).to.deep.equal([2, 3, 4, 5, 8, 5, "a"]);
  });

  it("should return empty array if input is an empty array", () => {
    const result = flatten([]);
    expect(result).to.deep.equal([]);
  });

  it("should return [3] if input is [3]", ()=> {
    const result = flatten([3]);
    expect(result).to.deep.equal([3]);
  });

  it("should return [3] if input is [3]", ()=> {
    const result = flatten([3]);
    expect(result).to.deep.equal([3]);
  });

});
