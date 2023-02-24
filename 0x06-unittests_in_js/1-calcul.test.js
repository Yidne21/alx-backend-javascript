const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("when type is SUM", () => {
    it("returns the sum of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 2.7, 3.2), 6);
      assert.strictEqual(calculateNumber("SUM", 2.2, 3.7), 6);
      assert.strictEqual(calculateNumber("SUM", -2.7, -3.2), -6);
      assert.strictEqual(calculateNumber("SUM", -2.2, -3.7), -6);
    });

    it("returns NaN if any of the arguments is not a number", () => {
      assert(isNaN(calculateNumber("SUM", 2.7, "3.2")));
      assert(isNaN(calculateNumber("SUM", "2.7", 3.2)));
      assert(isNaN(calculateNumber("SUM", "2.7", "3.2")));
      assert(isNaN(calculateNumber("SUM", NaN, 3.2)));
      assert(isNaN(calculateNumber("SUM", undefined, 3.2)));
    });

    it("returns the correct sum when one of the arguments is zero", () => {
      assert.strictEqual(calculateNumber("SUM", 0, 3.2), 3);
      assert.strictEqual(calculateNumber("SUM", 2.7, 0), 3);
      assert.strictEqual(calculateNumber("SUM", 0, -3.2), -3);
      assert.strictEqual(calculateNumber("SUM", -2.7, 0), -3);
    });

    it("returns the correct sum when one of the arguments is a large number", () => {
      assert.strictEqual(calculateNumber("SUM", 1e100, 3.2), 1e100);
      assert.strictEqual(calculateNumber("SUM", 2.7, 1e100), 1e100);
      assert.strictEqual(calculateNumber("SUM", -1e100, -3.2), -1e100);
      assert.strictEqual(calculateNumber("SUM", -2.7, -1e100), -1e100);
    });
  });
  describe("when type is SUBTRACT", () => {
    it("returns the difference between two rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.7, 3.2), 0);
      assert.strictEqual(calculateNumber("SUBTRACT", 2.2, 3.7), -2);
      assert.strictEqual(calculateNumber("SUBTRACT", -2.7, -3.2), 0);
      assert.strictEqual(calculateNumber("SUBTRACT", -2.2, -3.7), 2);
    });

    it("returns NaN if any of the arguments is not a number", () => {
      assert(isNaN(calculateNumber("SUBTRACT", 2.7, "3.2")));
      assert(isNaN(calculateNumber("SUBTRACT", "2.7", 3.2)));
      assert(isNaN(calculateNumber("SUBTRACT", "2.7", "3.2")));
      assert(isNaN(calculateNumber("SUBTRACT", NaN, 3.2)));
      assert(isNaN(calculateNumber("SUBTRACT", undefined, 3.2)));
    });

    it("returns the correct difference when one of the arguments is zero", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 0, 3.2), -3);
      assert.strictEqual(calculateNumber("SUBTRACT", 2.7, 0), 3);
      assert.strictEqual(calculateNumber("SUBTRACT", 0, -3.2), 3);
      assert.strictEqual(calculateNumber("SUBTRACT", -2.7, 0), -3);
    });

    it("returns the correct difference when one of the arguments is a large number", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1e100, 3.2), 1e100);
      assert.strictEqual(calculateNumber("SUBTRACT", 2.7, 1e100), -1e100);
      assert.strictEqual(calculateNumber("SUBTRACT", -1e100, -3.2), -1e100);
      assert.strictEqual(calculateNumber("SUBTRACT", -2.7, -1e100), 1e100);
    });
  });

  describe("when type is DIVIDE", () => {
    it("returns the quotient of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6, 2), 3);
      assert.strictEqual(calculateNumber("DIVIDE", 10, 3), 3.3333333333333335);
      assert.strictEqual(calculateNumber("DIVIDE", -6, -2), 3);
      assert.strictEqual(
        calculateNumber("DIVIDE", -10, 3),
        -3.3333333333333335
      );
    });

    it('returns "Error" if the second argument is zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 10, 0), "Error");
      assert.strictEqual(calculateNumber("DIVIDE", -10, 0), "Error");
      assert.strictEqual(calculateNumber("DIVIDE", 0, 0), "Error");
    });

    it("returns NaN if any of the arguments is not a number", () => {
      assert(isNaN(calculateNumber("DIVIDE", 2.7, "3.2")));
      assert(isNaN(calculateNumber("DIVIDE", "2.7", 3.2)));
      assert(isNaN(calculateNumber("DIVIDE", "2.7", "3.2")));
      assert(isNaN(calculateNumber("DIVIDE", NaN, 3.2)));
      assert(isNaN(calculateNumber("DIVIDE", undefined, 3.2)));
    });

    it("returns the correct quotient when one of the arguments is zero", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 0, 3.2), 0);
      assert.strictEqual(calculateNumber("DIVIDE", 2.7, 0), "Error");
      assert.strictEqual(calculateNumber("DIVIDE", -2.7, 0), "Error");
    });
  });
});
