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

function kthSmallest(root: TreeNode | null, k: number): number {
    let answer = 0;
    const stack = [];

    function dfs(node: TreeNode | null) {
        if (!node) return;

        dfs(node.left);
        stack.push(node.val);
        if (stack.length === k) {
            answer = node.val;
            return;
        }
        dfs(node.right);

    }

    dfs(root);

    return answer;
};