const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should log The total is: 120 when called with 100 and 20", function () {
    const stub = sinon.stub(Utils, "calculateNumber").returns(100);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly("The total is: 100")).to.be.true;
  });

  it("should log The total is: 20 when called with 10 and 10", function () {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);

    sendPaymentRequestToApi(10, 10);

    expect(stub.calledOnceWithExactly("SUM", 10, 10)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly("The total is: 10")).to.be.true;
  });
});
