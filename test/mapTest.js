const map = require("../map");
const { expect } = require("chai");

describe("#map", () => {
  it("should return ['g', 'c', 't', 'm', 't'] when words are ['ground', 'control', 'to', 'major', 'tom'] and call back is  word => word[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const callback = word => word[0];
    const result = map(words, callback);
    expect(result).to.deep.equal(['g', 'c', 't', 'm', 't']);
  });
  it("should return [6, 7, 2, 5, 3] when words are ['ground', 'control', 'to', 'major', 'tom'] and call back is  word => word[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const callback = word => word.length;
    const result = map(words, callback);
    expect(result).to.deep.equal([6, 7, 2, 5, 3]);
  });
});
