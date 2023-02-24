const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("when type is SUM", () => {
    it("returns the sum of two rounded numbers", () => {
      expect(calculateNumber("SUM", 1.2, 3.8)).to.equal(5);
    });

    it("returns NaN if any of the arguments is not a number", () => {
      expect(calculateNumber("SUM", "not a number", 5)).to.be.NaN;
    });

    it("returns the correct sum when one of the arguments is zero", () => {
      expect(calculateNumber("SUM", 0, 5)).to.equal(5);
    });

    it("returns the correct sum when one of the arguments is a large number", () => {
      expect(calculateNumber("SUM", 10000000000000000, 1)).to.equal(
        10000000000000001
      );
    });
  });

  describe("when type is SUBTRACT", () => {
    it("returns the difference between two rounded numbers", () => {
      expect(calculateNumber("SUBTRACT", 3.8, 1.2)).to.equal(3);
    });

    it("returns NaN if any of the arguments is not a number", () => {
      expect(calculateNumber("SUBTRACT", "not a number", 5)).to.be.NaN;
    });

    it("returns the correct difference when one of the arguments is zero", () => {
      expect(calculateNumber("SUBTRACT", 0, 5)).to.equal(-5);
    });

    it("returns the correct difference when one of the arguments is a large number", () => {
      expect(calculateNumber("SUBTRACT", 10000000000000000, 1)).to.equal(
        9999999999999999
      );
    });
  });

  describe("when type is DIVIDE", () => {
    it("returns the quotient of two rounded numbers", () => {
      expect(calculateNumber("DIVIDE", 8, 4)).to.equal(2);
    });

    it("returns 'Error' if the second argument is zero", () => {
      expect(calculateNumber("DIVIDE", 8, 0)).to.equal("Error");
    });

    it("returns NaN if any of the arguments is not a number", () => {
      expect(calculateNumber("DIVIDE", "not a number", 5)).to.be.NaN;
    });

    it("returns the correct quotient when one of the arguments is zero", () => {
      expect(calculateNumber("DIVIDE", 0, 5)).to.equal(0);
    });

    it("returns the correct quotient when one of the arguments is a large number", () => {
      expect(calculateNumber("DIVIDE", 10000000000000000, 2)).to.equal(
        5000000000000000
      );
    });
  });
});
