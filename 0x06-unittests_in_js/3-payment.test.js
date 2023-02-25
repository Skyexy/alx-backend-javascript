const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const assert = require("assert");

describe("utils", function() {
  describe("clculatenum", function(){
    it('should call save once', function() {
      var Spy = sinon.spy(Utils.calculateNumber);
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnce(Spy);
      var args = Spy.getCalls()[0].args
       assert.equal(args, 'SUM')
    }
  }
}
