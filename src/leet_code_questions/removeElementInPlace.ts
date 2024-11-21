export function removeElement(nums: number[], val: number): number {
  let nonValCount = 0; // Count of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nonValCount] = nums[i];
      nonValCount++;
    }
  }

  return nonValCount;
}

// Example usage:
const nums1 = [3, 2, 2, 3];
const val1 = 3;
const k1 = removeElement(nums1, val1);
// console.log(k1); // Output: 2
// console.log(nums1.slice(0, k1)); // Output: [2, 2]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
const k2 = removeElement(nums2, val2);
// console.log(k2); // Output: 5
// console.log(nums2.slice(0, k2)); // Output: [0, 1, 0, 3, 4]
