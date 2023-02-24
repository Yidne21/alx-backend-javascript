const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a resolved promise with data when success is true", (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result.data).to.equal("Successful response from the API");
      done();
    });
  });

  it("should return a resolved promise with no data when success is false", (done) => {
    getPaymentTokenFromAPI(false).then((result) => {
      expect(result).to.be.undefined;
      done();
    });
  });
});
