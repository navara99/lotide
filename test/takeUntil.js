const takeUntil = require("../takeUntil");
const { expect } = require("chai");

describe("#takeUntil", () => {

  it("should return [1, 2, 5, 7, 2] when input is [1, 2, 5, 7, 2, -1, 2, 4, 5] with callback x => x < 0", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data, x => x < 0);
    expect(result).to.deep.equal([1, 2, 5, 7, 2]);
  });

  it("should return ['I\'ve', 'been', 'to', 'Hollywood'] when input is  ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']; with callback x => x === ','", () => {
    const data =  ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data, x => x === ',');
    expect(result).to.deep.equal(['I\'ve', 'been', 'to', 'Hollywood']);
  });
  
});