const { expect } = require("chai");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return 'drama' when input is 'The Wire'", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    expect(result).to.equal("drama");
  });
  it("should return 'comedy' when input is 'Brooklyn Nine-Nine'", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    expect(result).to.equal("comedy");
  });
  it("should return undefined when input is 'That '70s Show'", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    expect(result).to.equal(undefined);
  });
})