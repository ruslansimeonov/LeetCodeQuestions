export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0; // Pointer for the position of the last unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
}

// Example usage:
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
// console.log(k1); // Output: 2
// console.log(nums1.slice(0, k1)); // Output: [1, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
// console.log(k2); // Output: 5
// console.log(nums2.slice(0, k2)); // Output: [0, 1, 2, 3, 4]
