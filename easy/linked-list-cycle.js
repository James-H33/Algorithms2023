/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let isCyclic = false;

    function traverse(node) {
        if (!node) {
            return;
        }

        if (node.visited) {
            isCyclic = true;
            return;
        }

        node.visited = true;

        traverse(node.next);
    }
    
    traverse(head);

    return isCyclic;
};