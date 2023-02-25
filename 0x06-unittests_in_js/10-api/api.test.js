const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('test the API /login with some body', (done) => {
    const prm = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Holberton',
      },
    };
    request(prm, (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome Holberton');
    });
    done();
  });

  it('test the API /login with no body', (done) => {
    const prm = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      
    };
    request(prm, (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome undefined');
    });
    done();
  });

  it('test the API /available_payments', (done) => {
    const prm = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };
    request(prm, (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
    });
    done();
  });


});
