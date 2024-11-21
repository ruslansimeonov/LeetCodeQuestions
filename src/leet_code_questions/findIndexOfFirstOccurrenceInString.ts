export function strStr(haystack: string, needle: string): number {
  let occurrenceIndex = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let found = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }

      if (found) {
        occurrenceIndex = i;
        break;
      }
    }
  }

  return occurrenceIndex;
}

export function strStr2(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  const lps = buildLPS(needle);
  let i = 0; // index for haystack
  let j = 0; // index for needle

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j;
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

function buildLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function benchmark() {
  const haystack = "a".repeat(10000000) + "b";
  const needle = "a".repeat(10000000);

  console.time("strStr");
  strStr(haystack, needle);
  console.timeEnd("strStr");

  console.time("strStr2");
  strStr2(haystack, needle);
  console.timeEnd("strStr2");
}

// Example usage:
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1

console.log(strStr2("sadbutsad", "sad")); // Output: 0
console.log(strStr2("leetcode", "leeto")); // Output: -1

benchmark();
