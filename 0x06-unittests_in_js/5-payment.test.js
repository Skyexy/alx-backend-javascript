const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");
const chai = require("chai");
const expect = chai.expect;

describe('Connection', function () {
  let consolepy;
  
  beforeEach(() => {
    consolepy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consolepy.restore();
  });
  it('should call 120', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(consolepy.calledWithExactly('The total is: 120'));
    expect(consolepy.CalledOnce);
  });
  it('should call 20', () => {
    sendPaymentRequestToApi(10, 10);
    
    expect(consolepy.calledWithExactly('The total is: 20'));
    expect(consolepy.CalledOnce);
  });
});
