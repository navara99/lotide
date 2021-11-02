const { expect } = require("chai");
const findKey = require("../findKey");

const testData = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

describe("#findKey",()=> {
  it("should return noma when input is object with callback  x => x.stars === 2",()=> {
    const result = findKey(testData, x => x.stars === 2);
    expect(result).to.equal("noma");
  });
  it("should return Akaleri when input is object with callback  x => x.stars === 3",()=> {
    const result = findKey(testData, x => x.stars === 3);
    expect(result).to.equal("Akaleri");
  });
  it("should return undefined when input is object with callback  x => x.stars === 5",()=> {
    const result = findKey(testData, x => x.stars === 5);
    expect(result).to.equal(undefined);
  });
})