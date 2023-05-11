/*
    Time: O(n)
    Space: O(n)
    Note: Recursively traverse the tree and return the max depth of both left and right branches.
    Then determine the max depth of the left and right branches and add 1 to the max depth.
    URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    function traverse(node) {
        if (!node) {
            return 0;
        }

        let leftDepth = traverse(node.left);
        let rightDepth = traverse(node.right);
        let maxDepth = Math.max(leftDepth, rightDepth);

        return maxDepth + 1;
    }

    const leftDepth = traverse(root.left);
    const rightDepth = traverse(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};