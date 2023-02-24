const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function() {
  it("calculate the summ of two numbers", function() {
    assert.equal(calculateNumber(1, 3, 'SUM'), 4);
    assert.equal(calculateNumber(1, 3.7, 'SUM'), 5);
    assert.equal(calculateNumber(1.2, 3.7, 'SUBTRACT'), -2);
    assert.equal(calculateNumber(1.5, 3.7, 'DIVIDE'), 1);
    assert.equal(calculateNumber(1.5, 0.2, 'DIVIDE'), 'Error');
    assert.equal(calculateNumber(-4.9, 3.7, 'SUM'), -1);
    assert.equal(calculateNumber(1.5, 3, 'SUM'), 5);
    assert.equal(calculateNumber(1.5, -3, 'SUM'), -1);
  });
});
