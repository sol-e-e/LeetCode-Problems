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

function sumNumbers(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, num: number): number {
        if (!node) return num;
        let sum = num * 10 + node.val;

        if (node.left && !node.right) {
            sum = dfs(node.left, sum);
        } else if (!node.left && node.right) {
            sum = dfs(node.right, sum);
        } else if (node.left && node.right) {
            sum = dfs(node.left, sum) + dfs(node.right, sum);
        } 
        
        return sum;
    }

    return dfs(root, 0);
};