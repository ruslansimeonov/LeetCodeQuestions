/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let nums1Index = m - 1; // Pointer for the last element in the valid part of nums1
  let nums2Index = n - 1; // Pointer for the last element in nums2
  let mergeIndex = m + n - 1; // Pointer for the last position in nums1

  while (nums1Index >= 0 && nums2Index >= 0) {
    if (nums1[nums1Index] > nums2[nums2Index]) {
      nums1[mergeIndex] = nums1[nums1Index];
      nums1Index--;
    } else {
      nums1[mergeIndex] = nums2[nums2Index];
      nums2Index--;
    }
    mergeIndex--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (nums2Index >= 0) {
    nums1[mergeIndex] = nums2[nums2Index];
    nums2Index--;
    mergeIndex--;
  }
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
// console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
