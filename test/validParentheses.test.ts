import { isValid } from "../src/leet_code_questions/validParentheses";

describe("isValid function", () => {
  test("example 1", () => {
    expect(isValid("()")).toBe(true);
  });

  test("example 2", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("example 3", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("example 4", () => {
    expect(isValid("([])")).toBe(true);
  });

  test("unmatched opening bracket", () => {
    expect(isValid("(")).toBe(false);
  });

  test("unmatched closing bracket", () => {
    expect(isValid(")")).toBe(false);
  });

  test("nested brackets", () => {
    expect(isValid("{[()]}")).toBe(true);
  });

  test("incorrectly nested brackets", () => {
    expect(isValid("{[(])}")).toBe(false);
  });

  test("empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("long valid string", () => {
    expect(isValid("(){}[]({[]})")).toBe(true);
  });

  test("long invalid string", () => {
    expect(isValid("(){}[]({[})")).toBe(false);
  });
});
