const assert = require('power-assert');
const BrowserHelper = require("../../../src/js/utilities/BrowserHelper");

describe('test/js/utilities/BrowserHelper.test.js', () => {
  beforeEach(() => {
  });
  describe('#getQueryParamByName()', () => {
    it('should return null when no query parameter or no corresponding query parameter key', () => {
      let actual = BrowserHelper.getQueryParamByName('foo', 'http://localhost:3000/');
      const expected = null;
      assert.equal(actual, expected);

      actual = BrowserHelper.getQueryParamByName('foo', 'http://localhost:3000/?bar=foo');
      assert.equal(actual, expected);
    });
    it('should return "" when no value of key', () => {
      let actual = BrowserHelper.getQueryParamByName('foo', 'http://localhost:3000/?foo=');
      const expected = '';
      assert.equal(actual, expected);

      actual = BrowserHelper.getQueryParamByName('foo', 'http://localhost:3000/?foo');
      assert.equal(actual, expected);
    });
    it("should return 'bar' value when the parameter is ('foo', 'http://localhost:3000/?foo=bar')", () => {
      let actual = BrowserHelper.getQueryParamByName('foo', 'http://localhost:3000/?foo=bar');
      const expected = 'bar';
      assert.equal(actual, expected);
    });
  });
});