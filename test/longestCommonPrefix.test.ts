import { longestCommonPrefix } from "../src/leet_code_questions/longestCommonPrefix";

describe("longestCommonPrefix function", () => {
  test("example 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("example 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("no common prefix", () => {
    expect(longestCommonPrefix(["apple", "banana", "cherry"])).toBe("");
  });

  test("all strings are the same", () => {
    expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
  });

  test("one string is empty", () => {
    expect(longestCommonPrefix(["", "b", "c"])).toBe("");
  });

  test("all strings are empty", () => {
    expect(longestCommonPrefix(["", "", ""])).toBe("");
  });

  test("single string in array", () => {
    expect(longestCommonPrefix(["single"])).toBe("single");
  });

  test("common prefix with different lengths", () => {
    expect(longestCommonPrefix(["interview", "inter", "internet"])).toBe(
      "inter"
    );
  });

  test("common prefix with one character", () => {
    expect(longestCommonPrefix(["a", "ab", "abc"])).toBe("a");
  });

  test("no strings in array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });
});
