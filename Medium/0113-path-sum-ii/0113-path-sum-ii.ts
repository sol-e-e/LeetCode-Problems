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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];
    const temp: number[] = [];

    function dfs(node: TreeNode | null, remainSum: number) {
        if (!node) return;
        if (!node.left && !node.right) {
            if (remainSum === node.val) result.push([...temp, node.val]);
            return;
        }

        const val = node.val;
        temp.push(val);
        dfs(node.left, remainSum - val);
        dfs(node.right, remainSum - val);
        temp.pop();
    }

    dfs(root, targetSum);

    return result;
};