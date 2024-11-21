import {
  ListNode,
  mergeTwoLists,
} from "../src/leet_code_questions/mergeTwoSortedLists";

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head: ListNode | null): number[] {
  let arr: number[] = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

test("mergeTwoLists example 1", () => {
  const list1 = createLinkedList([1, 2, 4]);
  const list2 = createLinkedList([1, 3, 4]);
  const mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
});

test("mergeTwoLists example 2", () => {
  const list1 = createLinkedList([]);
  const list2 = createLinkedList([]);
  const mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([]);
});

test("mergeTwoLists example 3", () => {
  const list1 = createLinkedList([]);
  const list2 = createLinkedList([0]);
  const mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([0]);
});

test("mergeTwoLists with list1 exhausted before list2", () => {
  const list1 = createLinkedList([1, 2]);
  const list2 = createLinkedList([3, 4, 5]);
  const mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 4, 5]);
});

test("mergeTwoLists with list2 exhausted before list1", () => {
  const list1 = createLinkedList([3, 4, 5]);
  const list2 = createLinkedList([1, 2]);
  const mergedList = mergeTwoLists(list1, list2);
  expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 4, 5]);
});
