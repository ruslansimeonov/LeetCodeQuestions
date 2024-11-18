import { romanToInt } from "../src/leet_code_questions/roman_to_integer";

test("romanToInt example 1", () => {
  expect(romanToInt("III")).toBe(3);
});

test("romanToInt example 2", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("romanToInt example 3", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("romanToInt with single character", () => {
  expect(romanToInt("I")).toBe(1);
  expect(romanToInt("V")).toBe(5);
  expect(romanToInt("X")).toBe(10);
  expect(romanToInt("L")).toBe(50);
  expect(romanToInt("C")).toBe(100);
  expect(romanToInt("D")).toBe(500);
  expect(romanToInt("M")).toBe(1000);
});

test("romanToInt with complex numerals", () => {
  expect(romanToInt("IV")).toBe(4);
  expect(romanToInt("IX")).toBe(9);
  expect(romanToInt("XL")).toBe(40);
  expect(romanToInt("XC")).toBe(90);
  expect(romanToInt("CD")).toBe(400);
  expect(romanToInt("CM")).toBe(900);
});
