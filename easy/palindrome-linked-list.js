/*
    Time: O(n)
    Space: O(1)
    Note: Iterate through the linked list and create a prev property on each node and set it to the node that came
    before it. Then iterate through the linked list, both foreward and backward, and compare the values of each node.
    URL: https://leetcode.com/problems/palindrome-linked-list
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let prev = null;
    let node = head;

    while (node) {
        node.prev = prev;
        prev = node;
        node = node.next;
    }

    let tail = prev;

    while (tail || head) {
        if (!tail || !head) {
            return false;
        }


        if (tail.val !== head.val) {
            return false;
        }

        tail = tail.prev;
        head = head.next;
    }

    return true;
};