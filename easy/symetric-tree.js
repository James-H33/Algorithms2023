/*
    Time: O(n)
    Space: O(n)
    Note: Traverse the tree in pre-order and inorder at the same time and compare
    the values of each. If they are not equal, then the tree is not symmetric.
    URL: https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let isBalanced = true;

    function traverse(leftNode, rightNode) {
        if (!leftNode && !rightNode) {
            return;
        }

        if (!leftNode || !rightNode) {
            isBalanced = false;
            return;
        }

        if (leftNode.val !== rightNode.val) {
            isBalanced = false;
            return;
        }

        traverse(leftNode.left, rightNode.right);
        traverse(leftNode.right, rightNode.left);
    }

    traverse(root.left, root.right);

    return isBalanced;
};