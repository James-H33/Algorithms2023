/*
    Time: O(n)
    Space: O(n)
    Note: Create a new linked list and iterate through both lists. Compare the values of the nodes in each list and add the smaller value to the new list.
    URL: https://leetcode.com/problems/merge-two-sorted-lists/
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let currNode = head;

    while (list1 || list2) {
        let node = new ListNode();
        let l1 = list1 || new ListNode(Infinity);
        let l2 = list2 || new ListNode(Infinity);

        if (l1.val > l2.val) {
            node.val = list2.val;
            list2 = list2.next;
        } else {
            node.val = list1.val;
            list1 = list1.next;
        }

        currNode.next = node;
        currNode = node; 
    }

    return head.next;
};