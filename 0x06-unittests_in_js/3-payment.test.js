const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should call Utils.calculateNumber with the correct arguments", () => {
    const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });

  it("should log the correct total to the console", () => {
    const logSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWithExactly("The total is: 120")).to.be.true;
    logSpy.restore();
  });
});
