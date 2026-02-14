import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { binarySearch, binarySearchRecursive } from "./binary.ts";

type SearchFn = (arr: number[], target: number) => number;

function expectFound(search: SearchFn, arr: number[], target: number): void {
  const index = search(arr, target);
  assert.ok(index >= 0, "expected a non-negative index");
  assert.strictEqual(arr[index], target);
}

function expectNotFound(search: SearchFn, arr: number[], target: number): void {
  assert.strictEqual(search(arr, target), -1);
}

describe("binarySearch", () => {
  test("finds a middle element", () => {
    expectFound(binarySearch, [1, 3, 5, 7, 9], 5);
  });

  test("finds first and last elements", () => {
    expectFound(binarySearch, [2, 4, 6, 8, 10], 2);
    expectFound(binarySearch, [2, 4, 6, 8, 10], 10);
  });

  test("returns -1 when target is missing", () => {
    expectNotFound(binarySearch, [1, 3, 5, 7, 9], 6);
  });

  test("handles empty and single-element arrays", () => {
    expectNotFound(binarySearch, [], 1);
    expectFound(binarySearch, [42], 42);
    expectNotFound(binarySearch, [42], 7);
  });

  test("handles negative numbers", () => {
    expectFound(binarySearch, [-10, -3, 0, 4, 12], -3);
    expectNotFound(binarySearch, [-10, -3, 0, 4, 12], 2);
  });

  test("handles duplicate values", () => {
    expectFound(binarySearch, [1, 2, 2, 2, 3], 2);
  });
});

describe("binarySearchRecursive", () => {
  test("finds a middle element", () => {
    expectFound(binarySearchRecursive, [1, 3, 5, 7, 9], 5);
  });

  test("finds first and last elements", () => {
    expectFound(binarySearchRecursive, [2, 4, 6, 8, 10], 2);
    expectFound(binarySearchRecursive, [2, 4, 6, 8, 10], 10);
  });

  test("returns -1 when target is missing", () => {
    expectNotFound(binarySearchRecursive, [1, 3, 5, 7, 9], 6);
  });

  test("handles empty and single-element arrays", () => {
    expectNotFound(binarySearchRecursive, [], 1);
    expectFound(binarySearchRecursive, [42], 42);
    expectNotFound(binarySearchRecursive, [42], 7);
  });

  test("handles negative numbers", () => {
    expectFound(binarySearchRecursive, [-10, -3, 0, 4, 12], -3);
    expectNotFound(binarySearchRecursive, [-10, -3, 0, 4, 12], 2);
  });

  test("handles duplicate values", () => {
    expectFound(binarySearchRecursive, [1, 2, 2, 2, 3], 2);
  });
});
