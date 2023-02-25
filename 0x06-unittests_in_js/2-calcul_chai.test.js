const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
  it("calculate the summ of two numbers", function() {
    expect(calculateNumber('SUM', 1, 3)).to.be.4;
    expect(calculateNumber('SUM', 1, 3.7)).to.be.5;
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.be.-3;
    expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.be.2;
    expect(calculateNumber('DIVIDE', 1.5, 0.2)).to.be.'Error';
    expect(calculateNumber('SUM', -4.9, 3.7)).to.be.-1;
    expect(calculateNumber('SUM', 1.5, 3)).to.be.5;
    expect(calculateNumber('SUM', 1.5, -3)).to.be.-1;
  });
});
