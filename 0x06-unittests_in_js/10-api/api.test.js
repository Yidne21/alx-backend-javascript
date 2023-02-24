const request = require("supertest");
const { expect } = require("chai");
const app = require("./api");

describe("Test the root path", () => {
  it("Should respond with a 200 status code", () => {
    request(app).get("/").expect(200);
  });

  it("Should respond with a welcome message", () => {
    request(app).get("/").expect("Welcome to the payment system");
  });
});

describe("Test the /cart/:id path", () => {
  it("Should respond with a 200 status code when :id is a number", () => {
    request(app).get("/cart/123").expect(200);
  });

  it("Should respond with a 404 status code when :id is not a number", () => {
    request(app).get("/cart/abc").expect(404);
  });

  it("Should respond with a message containing the cart id", () => {
    request(app).get("/cart/123").expect("Payment methods for cart 123");
  });
});

describe("Test the /available_payments path", () => {
  it("Should respond with a 200 status code", () => {
    request(app).get("/available_payments").expect(200);
  });

  it("Should respond with an object containing the payment methods", () => {
    request(app)
      .get("/available_payments")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
      });
  });
});

describe("Test the /login path", () => {
  it("Should respond with a 200 status code", () => {
    request(app).post("/login").send({ userName: "John" }).expect(200);
  });

  it("Should respond with a welcome message", () => {
    request(app)
      .post("/login")
      .send({ userName: "John" })
      .expect("Welcome John");
  });
});
