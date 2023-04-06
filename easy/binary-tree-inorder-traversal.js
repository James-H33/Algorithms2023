/*
    Time: O(n)
    Space: O(n)
    Note: Use recursion to traverse the tree in order. Push the value of the node into the output array when the node is visited.
    URL: https://leetcode.com/problems/binary-tree-inorder-traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const output = [];

    traverse(root);

    function traverse(node) {
        if (!node) {
            return;
        }

        traverse(node.left);
        output.push(node.val);
        traverse(node.right);
    }

    return output; 
};