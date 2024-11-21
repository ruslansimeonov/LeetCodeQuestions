import { searchInsert } from "../src/leet_code_questions/searchInsertPosition";

describe("searchInsert function", () => {
  test("example 1", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test("example 2", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test("example 3", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test("target is smaller than all elements", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test("target is larger than all elements", () => {
    expect(searchInsert([1, 3, 5, 6], 8)).toBe(4);
  });

  test("target is in the middle of the array", () => {
    expect(searchInsert([1, 3, 5, 6, 9], 6)).toBe(3);
  });

  test("target is not in the array and should be inserted in the middle", () => {
    expect(searchInsert([1, 3, 5, 6, 9], 4)).toBe(2);
  });

  test("single element array, target is the element", () => {
    expect(searchInsert([1], 1)).toBe(0);
  });

  test("single element array, target is smaller", () => {
    expect(searchInsert([1], 0)).toBe(0);
  });

  test("single element array, target is larger", () => {
    expect(searchInsert([1], 2)).toBe(1);
  });
});
