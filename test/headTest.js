const head = require("../head");
const { assert } = require("chai");

describe("#head", () => {

  it("returns first element for a valid array", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns first element for an array with 1 element", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 'Hello' when input is ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 'Python' when input is ['Python', 'Ruby'])", () => {
    assert.strictEqual(head(['Python', 'Ruby']), "Python");
  });

  it("returns null for a non array input", () => {
    assert.strictEqual(head("12"), null);
  });
  
});