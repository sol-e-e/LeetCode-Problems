/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    let answer = true;
    let prev = 0;

    function inorder(node: TreeNode | null) {
        if (!node) return;

        inorder(node.left);
        if (prev >= node.val) {
            answer = false;
            return;
        }
        prev = node.val;
        inorder(node.right);
    }

    inorder(root);

    return answer;
};