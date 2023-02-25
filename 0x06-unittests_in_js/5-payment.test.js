const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");
const chai = require("chai");
const expect = chai.expect;

describe('Connection', function () {
  let console;
  
  beforeEach('beforeeach', function (){
    console = sinon.spy(console, 'log');
  });
  afterEach('aftereach', function () {
    console.restore();
  });
  it('should call 120', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.calledWithExactly('The total is: 120'));
    expect(consolespy.CalledOnce);
  });
  it('should call 20', function() {
    sendPaymentRequestToApi(10, 20);
    expect(console.calledWithExactly('The total is: 20'));
    expect(consolespy.CalledOnce);
  });
});
