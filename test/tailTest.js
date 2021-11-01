const tail = require("../tail");
const { expect } = require("chai");

describe("#tail", () => {
  it("should return '['Lighthouse', 'Labs']' for valid input '['Hello', 'Lighthouse', 'Labs']'", () => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.deep.equal(["Lighthouse", "Labs"]);
  });

  it("should return null if input is not an array", () => {
    expect(tail(12)).to.equal(null);
  });
});