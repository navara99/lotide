const { expect } = require("chai");
const countLetters = require("../countLetters");

describe("#countLetters", () => {

  it("should return 4 for countLetters('lighthouse in the house')['h']", () => {
    const result = countLetters("lighthouse in the house")["h"];
    expect(result).to.equal(4);
  });

  it("should return 5 for countLetters('Joe waited for the train. The train was late.')['e']", () => {
    const result = countLetters("Joe waited for the train. The train was late.")["e"];
    expect(result).to.equal(5);
  });
  
});