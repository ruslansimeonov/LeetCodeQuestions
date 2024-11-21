import { merge } from "../src/leet_code_questions/mergeSortedArray";

describe("merge function", () => {
  it("should merge two sorted arrays (example 1)", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should handle merging when nums2 is empty (example 2)", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  it("should handle merging when nums1 is empty (example 3)", () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });

  it("should handle merging when nums1 has remaining elements", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle merging when nums2 has remaining elements", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [4, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle merging when nums1 and nums2 are interleaved", () => {
    const nums1 = [1, 3, 5, 0, 0, 0];
    const nums2 = [2, 4, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle merging when nums1 is larger than nums2", () => {
    const nums1 = [1, 2, 3, 4, 5, 0, 0, 0];
    const nums2 = [6, 7, 8];
    merge(nums1, 5, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should handle merging when nums2 is larger than nums1", () => {
    const nums1 = [1, 0, 0, 0, 0, 0];
    const nums2 = [2, 3, 4, 5, 6];
    merge(nums1, 1, nums2, 5);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
