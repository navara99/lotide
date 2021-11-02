const letterPositions = require("../letterPositions");
const { expect } = require("chai");

describe("#letterPositions", () => {

  it("returns [0] when input when letterPositions('hello')['h'] is executed", () => {
    const result = letterPositions("hello")["h"];
    expect(result).to.deep.equal([0]);
  });

  it("returns [2,3] when input when letterPositions('hello')['l'] is executed", () => {
    const result = letterPositions("hello")["l"];
    expect(result).to.deep.equal([2, 3]);
  });

  it("returns [4] when input when letterPositions('hello')['o'] is executed", () => {
    const result = letterPositions("hello")["o"];
    expect(result).to.deep.equal([4]);
  });
  
});
