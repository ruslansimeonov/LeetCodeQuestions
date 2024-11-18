"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
exports.mergeTwoLists = mergeTwoLists;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function mergeTwoLists(list1, list2) {
    var dummy = new ListNode();
    var current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    }
    else {
        current.next = list2;
    }
    return dummy.next;
}
// Example usage:
var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
var mergedList = mergeTwoLists(list1, list2);
function printList(head) {
    var current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
printList(mergedList);
