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

function getMinimumDifference(root: TreeNode | null): number {
    let answer = Infinity;
    const stack = [];

    function dfs(node: TreeNode | null) {
        if (!node) return;

        dfs(node.left);

        stack.push(node.val);

        dfs(node.right);
    }

    dfs(root);

    for (let i = 1; i < stack.length; i++) {
        answer = Math.min(answer, stack[i] - stack[i - 1]);
    }

    return answer;
};