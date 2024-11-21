export function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
// console.log(isValid("()")); // Output: true
// console.log(isValid("()[]{}")); // Output: true
// console.log(isValid("(]")); // Output: false
// console.log(isValid("([])")); // Output: true