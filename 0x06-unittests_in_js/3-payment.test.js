const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const chai = require("chai");
const expect = chai.expect;

describe("utils", function() {
    it('should call save once', function() {
      const funcspy = sinon.spy(Utils, 'calculateNumber');
      const reqApi = sendPaymentRequestToApi(100, 20);
      
      expect(funcspy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
      expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(reqApi);
      
      funcspy.restore();
    });
});
