export function longestCommonPrefix(strs: string[]): string {
  let output = "";

  if (strs.length === 0) {
    return output;
  }
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.some((str) => str[i] !== strs[0][i])) {
      break;
    }
    output += strs[0][i];
  }
  return output;
}

// Example usage:
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
