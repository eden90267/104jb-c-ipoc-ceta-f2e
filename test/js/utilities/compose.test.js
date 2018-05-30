const assert = require('power-assert');
const compose = require('../../../src/js/utilities/compose');

describe('test/js/utilities/compose.test.js', () => {
  beforeEach(() => {
  });
  describe('#compose()', () => {
    it('should A class have B class members after executed compose(B)(A)', () => {
      const A = class {
        a() {
        }
      };
      const B = (Clazz) => class extends Clazz {
        b() {
        }
      };
      const value = compose(B)(A);
      assert(new value().b !== undefined);
    });
  });
});