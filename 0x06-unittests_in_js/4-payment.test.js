const expect = require("chai").expect;
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  let calculateNumberStub, consoleLogSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it("calls Utils.calculateNumber with the correct arguments", function () {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;
  });

  it("logs the correct message", function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly("The total is: 10")).to.be.true;
  });
});
