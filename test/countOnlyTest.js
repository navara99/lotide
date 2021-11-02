const { expect } = require("chai");
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {

  it("should return {Jason: 1, Fang: 2} for { Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(result).to.deep.equal({ Jason: 1, Fang: 2 });
  });
  
});