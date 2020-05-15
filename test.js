const { expect } = require('chai');
const { ip2location, reverseIPLookup } = require('./dist/index');

describe('Node DNS Tools Test', () => {
  // ip2location
  describe('IP To Location', () => {
    it('should succeed', (done) => {
      ip2location('8.8.8.8', (err, data) => {
        expect(data.status).to.equal('success');
        done();
      });
    }).timeout(15000);

    it('should fail ', (done) => {
      ip2location('10.10.1.1', (err, data) => {
        expect(data.status).to.equal('fail');
        done();
      });
    }).timeout(15000);
  });

  // revese ip lookup
  describe('Reverse IP Lookup', () => {
    it('should not fail when url scheme is passed', (done) => {
      reverseIPLookup('http://google.com', (err, data) => {
        expect(err).equal(null);
        done();
      });
    }).timeout(15000);

    it('should return a list of data more than zero', (done) => {
      reverseIPLookup('http://google.com', (err, data) => {
        expect(data).length.gt(0);
        done();
      });
    }).timeout(15000);

    it('should work with IPs also', (done) => {
      reverseIPLookup('8.8.8.8', (err, data) => {
        expect(data).length.gt(0);
        done();
      });
    }).timeout(15000);
  });
});