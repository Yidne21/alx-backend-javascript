/**
 * A Test module for calculateNumber function
 * @author Yidnekachew Bantrga <https://github.com/Yidne21>
 */
const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("returns the sum of two rounded numbers", () => {
    assert.strictEqual(calculateNumber(2.7, 3.2), 6);
    assert.strictEqual(calculateNumber(2.2, 3.7), 6);
    assert.strictEqual(calculateNumber(-2.7, -3.2), -6);
    assert.strictEqual(calculateNumber(-2.2, -3.7), -6);
  });

  it("returns NaN if any of the arguments is not a number", () => {
    assert(isNaN(calculateNumber(2.7, "3.2")));
    assert(isNaN(calculateNumber("2.7", 3.2)));
    assert(isNaN(calculateNumber("2.7", "3.2")));
    assert(isNaN(calculateNumber(NaN, 3.2)));
    assert(isNaN(calculateNumber(undefined, 3.2)));
  });

  it("returns the correct sum when one of the arguments is zero", () => {
    assert.strictEqual(calculateNumber(0, 3.2), 3);
    assert.strictEqual(calculateNumber(2.7, 0), 3);
    assert.strictEqual(calculateNumber(0, -3.2), -3);
    assert.strictEqual(calculateNumber(-2.7, 0), -3);
  });

  it("returns the correct sum when one of the arguments is a large number", () => {
    assert.strictEqual(calculateNumber(1e100, 3.2), 1e100);
    assert.strictEqual(calculateNumber(2.7, 1e100), 1e100);
    assert.strictEqual(calculateNumber(-1e100, -3.2), -1e100);
    assert.strictEqual(calculateNumber(-2.7, -1e100), -1e100);
  });
});
