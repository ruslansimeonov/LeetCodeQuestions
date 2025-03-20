type Fn = (n: number, i: number) => any;

// arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }

// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i)
//  evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

export function filter(arr: number[], fn: Fn): number[] {
  let valuesToReturn: number[] = [];
  arr.forEach((element, index) => {
    let result = fn(element, index);
    if (result) {
      valuesToReturn.push(element);
    }
  });
  return valuesToReturn;
}

// Test case 1: greaterThan10
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function (n: number) {
  return n > 10;
};
console.log("Test case 1 (greaterThan10):");
console.log("Input:", arr1);
console.log("Expected output: [20, 30]");
console.log("Actual output:", filter(arr1, greaterThan10));
console.log("------------------------");

// Test case 2: firstIndex
const arr2 = [1, 2, 3];
const firstIndex = function (n: number, i: number) {
  return i === 0;
};
console.log("Test case 2 (firstIndex):");
console.log("Input:", arr2);
console.log("Expected output: [1]");
console.log("Actual output:", filter(arr2, firstIndex));
console.log("------------------------");

// Test case 3: plusOne
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function (n: number) {
  return n + 1;
};
console.log("Test case 3 (plusOne):");
console.log("Input:", arr3);
console.log("Expected output: [-2,0,1,2]"); // All except 0 because 0+1=1 is truthy
console.log("Actual output:", filter(arr3, plusOne));
console.log("------------------------");
