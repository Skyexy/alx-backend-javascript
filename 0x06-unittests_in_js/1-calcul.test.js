const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function() {
  it("calculate the summ of two numbers", function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    assert.equal(calculateNumber('DIVIDE', 1.5, 0.2), 'Error');
    assert.equal(calculateNumber('SUM', -4.9, 3.7), -1);
    assert.equal(calculateNumber('SUM', 1.5, 3), 5);
    assert.equal(calculateNumber('SUM', 1.5, -3), -1);
  });
});
