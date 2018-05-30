const assert = require('power-assert');
const ArrHelper = require("../../../src/js/utilities/ArrHelper");

describe('test/js/utilities/ArrHelper.test.js', () => {
  beforeEach(() => {
  });
  describe('#next()', () => {
    it('should return same parameter of arr value when the parameter arr is undefined or empty', () => {
      let value = ArrHelper.next();
      assert(value === undefined);

      value = ArrHelper.next([]);
      assert(value !== undefined && value.length === 0);
    });
    it('should return [1, 2, 3, 1, 2] when the parameter is ([1, 2, 3], 0, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3], 0, 5);
      const expected = [1, 2, 3, 1, 2];
      assert.deepEqual(actual, expected);
    });
    it('should return [2, 3, 1, 2, 3] when the parameter is ([1, 2, 3], 1, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3], 1, 5);
      const expected = [2, 3, 1, 2, 3];
      assert.deepEqual(actual, expected);
    });
    it('should return [3, 1, 2, 3, 1] when the parameter is ([1, 2, 3], 2, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3], 2, 5);
      const expected = [3, 1, 2, 3, 1];
      assert.deepEqual(actual, expected);
    });
    it('should return [1, 2, 3, 4, 5] when the parameter is ([1, 2, 3, 4, 5], 0, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3, 4, 5], 0, 5);
      const expected = [1, 2, 3, 4, 5];
      assert.deepEqual(actual, expected);
    });
    it('should return [2, 3, 4, 5, 1] when the parameter is ([1, 2, 3, 4, 5], 1, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3, 4, 5], 1, 5);
      const expected = [2, 3, 4, 5, 1];
      assert.deepEqual(actual, expected);
    });
    it('should return [3, 4, 5, 1, 2] when the parameter is ([1, 2, 3, 4, 5], 2, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3, 4, 5], 2, 5);
      const expected = [3, 4, 5, 1, 2];
      assert.deepEqual(actual, expected);
    });
    it('should return [2, 3, 4, 5, 6] when the parameter is ([1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10], 1, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10], 1, 5);
      const expected = [2, 3, 4, 5, 6];
      assert.deepEqual(actual, expected);
    });
    it('should return [10, 1, 2, 3, 4] when the parameter is ([1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10], 9, 5)', () => {
      const actual = ArrHelper.next([1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10], 9, 5);
      const expected = [10, 1, 2, 3, 4];
      assert.deepEqual(actual, expected);
    });
  })
});