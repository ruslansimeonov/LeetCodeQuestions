import { filter } from "../src/leet_code_questions/filterElementsFromArray";

describe("filter function", () => {
  it("should filter elements based on a value condition", () => {
    // Test case 1: greaterThan10
    const arr1 = [0, 10, 20, 30];
    const greaterThan10 = function (n: number) {
      return n > 10;
    };

    const result1 = filter(arr1, greaterThan10);
    expect(result1).toEqual([20, 30]);
  });

  it("should filter elements based on index", () => {
    // Test case 2: firstIndex
    const arr2 = [1, 2, 3];
    const firstIndex = function (n: number, i: number) {
      return i === 0;
    };

    const result2 = filter(arr2, firstIndex);
    expect(result2).toEqual([1]);
  });

  it("should filter out elements that produce falsy values", () => {
    // Test case 3: plusOne (filtering out elements that result in falsy values)
    const arr3 = [-2, -1, 0, 1, 2];
    const plusOne = function (n: number) {
      return n + 1;
    };

    const result3 = filter(arr3, plusOne);
    expect(result3).toEqual([-2, 0, 1, 2]);
  });

  it("should handle empty arrays", () => {
    const emptyArr: number[] = [];
    const anyFn = function (n: number) {
      return n > 0;
    };

    const result = filter(emptyArr, anyFn);
    expect(result).toEqual([]);
  });

  it("should handle arrays with all falsy results", () => {
    const arr = [0, 0, 0, 0];
    const returnZero = function () {
      return 0;
    };

    const result = filter(arr, returnZero);
    expect(result).toEqual([]);
  });

  it("should handle arrays with all truthy results", () => {
    const arr = [1, 2, 3, 4];
    const returnTrue = function () {
      return true;
    };

    const result = filter(arr, returnTrue);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
