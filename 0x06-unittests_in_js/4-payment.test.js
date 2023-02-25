const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");
const chai = require("chai");
const expect = chai.expect;

describe("utils", function() {
    it('should call save once', function() {
      const isLoggedInStub = sinon.stub(Utils, "calculateNumber").returns(10);
      const funcspy = sinon.spy(console, 'log');
      const reqApi = sendPaymentRequestToApi(100, 20);

      expect(funcspy.calledWithExactly('The total is: 10'));
      expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(reqApi);
      
      funcspy.restore();
      isLoggedInStub.restore();
    });
});
