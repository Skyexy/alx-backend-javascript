const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function() {
  it("calculate the summ of two numbers", function() {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1.5, 3.4), 5);
    assert.equal(calculateNumber(-4.9, 3.7), -1);
    assert.equal(calculateNumber(1.5, 3), 5);
    assert.equal(calculateNumber(1.5, -3), -1);
  });
});
