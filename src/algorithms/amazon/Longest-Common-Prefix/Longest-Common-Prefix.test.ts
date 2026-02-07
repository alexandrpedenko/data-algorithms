import { getLongestCommonPrefix } from "./Longest-Common-Prefix.ts";
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

describe("getLongestCommonPrefix", () => {
  // Example cases from the problem description
  test('should return "di" for ["digital","dig","dinner"]', () => {
    assert.strictEqual(getLongestCommonPrefix(["digital", "dig", "dinner"]), "di");
  });

  test('should return "ha" for ["happy","harbor","hard"]', () => {
    assert.strictEqual(getLongestCommonPrefix(["happy", "harbor", "hard"]), "ha");
  });

  test('should return "app" for ["apple","application","appetite","app"]', () => {
    assert.strictEqual(getLongestCommonPrefix(["apple", "application", "appetite", "app"]), "app");
  });

  // Edge cases
  test("should return empty string for empty array", () => {
    assert.strictEqual(getLongestCommonPrefix([]), "");
  });

  test("should return the string itself when array has only one string", () => {
    assert.strictEqual(getLongestCommonPrefix(["hello"]), "hello");
  });

  test("should return empty string when strings have no common prefix", () => {
    assert.strictEqual(getLongestCommonPrefix(["dog", "cat", "bird"]), "");
  });

  test("should return empty string when first string is empty", () => {
    assert.strictEqual(getLongestCommonPrefix(["", "test", "testing"]), "");
  });

  test("should return empty string when any string is empty", () => {
    assert.strictEqual(getLongestCommonPrefix(["test", "", "testing"]), "");
  });

  // Additional test cases
  test("should return full string when all strings are identical", () => {
    assert.strictEqual(getLongestCommonPrefix(["same", "same", "same"]), "same");
  });

  test("should handle single character common prefix", () => {
    assert.strictEqual(getLongestCommonPrefix(["a", "ab", "abc"]), "a");
  });

  test("should handle strings with different lengths", () => {
    assert.strictEqual(getLongestCommonPrefix(["flower", "flow", "flight"]), "fl");
  });

  test("should return empty string when first character differs", () => {
    assert.strictEqual(getLongestCommonPrefix(["abc", "bbc", "cbc"]), "");
  });

  test("should handle two strings", () => {
    assert.strictEqual(getLongestCommonPrefix(["interstellar", "internet"]), "inter");
  });

  test("should handle case sensitivity", () => {
    assert.strictEqual(getLongestCommonPrefix(["Test", "test", "testing"]), "");
  });

  test("should handle strings with special characters", () => {
    assert.strictEqual(getLongestCommonPrefix(["@home", "@house", "@hotel"]), "@ho");
  });

  test("should handle strings with numbers", () => {
    assert.strictEqual(getLongestCommonPrefix(["123abc", "123def", "123xyz"]), "123");
  });
});
