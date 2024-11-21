import { performance } from "perf_hooks";
import {
  strStr,
  strStr2,
} from "../src/leet_code_questions/findIndexOfFirstOccurrenceInString";

describe("strStr function", () => {
  test("example 1", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });

  test("example 2", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });

  test("needle not in haystack", () => {
    expect(strStr("hello", "world")).toBe(-1);
  });

  test("needle is empty", () => {
    expect(strStr("hello", "")).toBe(-1);
  });

  test("haystack is empty", () => {
    expect(strStr("", "hello")).toBe(-1);
  });

  test("needle is longer than haystack", () => {
    expect(strStr("short", "longerneedle")).toBe(-1);
  });

  test("large input", () => {
    const haystack = "a".repeat(10000) + "b";
    const needle = "a".repeat(10000);
    const start = performance.now();
    expect(strStr(haystack, needle)).toBe(0);
    const end = performance.now();
    console.log(`strStr execution time: ${end - start} ms`);
  });
});

describe("strStr2 function", () => {
  test("example 1", () => {
    expect(strStr2("sadbutsad", "sad")).toBe(0);
  });

  test("example 2", () => {
    expect(strStr2("leetcode", "leeto")).toBe(-1);
  });

  test("needle not in haystack", () => {
    expect(strStr2("hello", "world")).toBe(-1);
  });

  test("needle is empty", () => {
    expect(strStr2("hello", "")).toBe(0);
  });

  test("haystack is empty", () => {
    expect(strStr2("", "hello")).toBe(-1);
  });

  test("needle is longer than haystack", () => {
    expect(strStr2("short", "longerneedle")).toBe(-1);
  });

  test("large input", () => {
    const haystack = "a".repeat(10000) + "b";
    const needle = "a".repeat(10000);
    const start = performance.now();
    expect(strStr2(haystack, needle)).toBe(0);
    const end = performance.now();
    console.log(`strStr2 execution time: ${end - start} ms`);
  });
});
