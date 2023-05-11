/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let listLength = 0;
    let prev = null;
    let node = head;

    while (node) {
        node.prev = prev;
        prev = node;
        node = node.next;
        listLength++;
    }

    let target = (listLength - n) + 1;
    let index = listLength;

    node = prev;
    prev = null;

    while (index > target) {
        prev = node;
        node = node.prev;
        index--;
    }

    let next = node.prev;

    if (!next) {
        return prev;
    }

    next.next = prev;

    return head;
};