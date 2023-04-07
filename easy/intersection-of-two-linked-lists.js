/*
    Time: O(n)
    Space: O(1)
    Note: Mark the visited node in the first list, then check the second list for any visited nodes.
    URL: https://leetcode.com/problems/intersection-of-two-linked-lists
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while (headA) {
        headA.visited = true;
        headA = headA.next;
    }

    while (headB) {
        if (headB.visited) {
            return headB;
        }

        headB.visited = true;
        headB = headB.next;
    }

    return null;
};