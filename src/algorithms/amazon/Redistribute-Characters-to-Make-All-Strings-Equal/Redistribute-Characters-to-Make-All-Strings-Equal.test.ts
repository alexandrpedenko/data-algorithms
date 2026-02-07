import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { canRedistributeToMakeEqual } from './Redistribute-Characters-to-Make-All-Strings-Equal.ts';

describe('canRedistributeToMakeEqual', () => {
  test('should return true when characters can be equally redistributed', () => {
    const words = ["aaa", "bbb", "ccc", "abc"];
    assert.strictEqual(canRedistributeToMakeEqual(words), true);
  });

  test('should return false when equal distribution is impossible', () => {
    const words = ["ab", "bc", "cd", "de", "ea"];
    assert.strictEqual(canRedistributeToMakeEqual(words), false);
  });

  test('should return true for strings with same character distribution', () => {
    const words = ["zzx", "xzz", "zxz"];
    assert.strictEqual(canRedistributeToMakeEqual(words), true);
  });

  test('should return true for identical strings', () => {
    const words = ["abc", "abc", "abc"];
    assert.strictEqual(canRedistributeToMakeEqual(words), true);
  });

  test('should return true for single string', () => {
    const words = ["hello"];
    assert.strictEqual(canRedistributeToMakeEqual(words), true);
  });

  test('should return true when all characters divide evenly', () => {
    const words = ["aa", "bb"];
    assert.strictEqual(canRedistributeToMakeEqual(words), true);
  });
});
