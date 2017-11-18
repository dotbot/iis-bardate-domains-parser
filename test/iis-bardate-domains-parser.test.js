var axios = require('axios');
var resolve = require('path').resolve;
var sinon = require('sinon');
var expect = require('chai').expect;
var iisParser = require('./../lib/iis-bardate-domains-parser');
var readFileSync = require('fs').readFileSync;

describe('IIS bardate domains parser', function() {
  describe('parse', function() {

    describe('live text file', function() {
      it('should handle success', function() {
        sinon.spy(axios, 'get');

        return iisParser
          .parseAsync()
          .then(function(parsedDomains) {
            sinon.assert.calledWith(axios.get, 'https://www.iis.se/data/bardate_domains.txt');
            expect(parsedDomains.length).to.be.greaterThan(1000);
            axios.get.restore();
          });
      });
    });

    describe('mocked text file', function() {
      beforeEach(function() {
        sinon.stub(axios, 'get');
      });

      afterEach(function() {
        axios.get.restore();
      });

      it('should handle success', function() {
        var mockedTextFile = readFileSync(resolve('.', 'test/bardate_domains.txt'));

        var responseMock = {
          status: 200,
          data: mockedTextFile
        };

        axios.get.resolves(responseMock);

        return iisParser
          .parseAsync()
          .then(function(parsedDomains) {
            sinon.assert.calledWith(axios.get, 'https://www.iis.se/data/bardate_domains.txt');

            var expectedDomains = [
              {name: '002.se', date: '2017-12-03'},
              {name: '123-456.se', date: '2018-01-23'},
              {name: 'abc-123.se', date: '2018-01-23'},
              {name: 'abc-def.se', date: '2018-01-23'},
              {name: 'abc.se', date: '2018-01-23'},
              {name: 'abc123.se', date: '2018-01-23'}
            ];

            expect(parsedDomains).to.eql(expectedDomains);
          });
      });

      it('should handle failure', function() {
        axios.get.rejects(new Error('URL not found'));

        return iisParser
          .parseAsync()
          .catch(function(error) {
            sinon.assert.calledWith(axios.get, 'https://www.iis.se/data/bardate_domains.txt');

            expect(error.toString()).to.equal('Error: URL not found');
          });
      });
    });
  });
});
