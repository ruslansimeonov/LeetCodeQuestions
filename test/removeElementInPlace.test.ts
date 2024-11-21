import { removeElement } from '../src/leet_code_questions/removeElementInPlace';

test('removeElement example 1', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k).sort()).toEqual([2, 2]);
});

test('removeElement example 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    expect(nums.slice(0, k).sort()).toEqual([0, 0, 1, 3, 4]);
});

test('removeElement with no occurrences', () => {
    const nums = [1, 2, 3, 4, 5];
    const val = 6;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    expect(nums.slice(0, k).sort()).toEqual([1, 2, 3, 4, 5]);
});

test('removeElement with all occurrences', () => {
    const nums = [2, 2, 2, 2, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
});

test('removeElement with mixed values', () => {
    const nums = [4, 1, 2, 3, 4, 4, 5];
    const val = 4;
    const k = removeElement(nums, val);
    expect(k).toBe(4);
    expect(nums.slice(0, k).sort()).toEqual([1, 2, 3, 5]);
});