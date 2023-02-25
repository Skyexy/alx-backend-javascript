const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const chai = require("chai");
const expect = chai.expect;

describe("utils", function() {
  describe("clculatenum", function(){
    it('should call save once', function() {
      var Spy = sinon.spy(Utils.calculateNumber);
      sendPaymentRequestToApi(100, 20);
      expect(Spy.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal('SUM');
    });
  });
});
