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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;

    return dfs(root, targetSum, []);
};

function dfs(root: TreeNode | null, targetSum: number, sums: number[]) {
    if (!root) return 0;

    let count = 0;

    sums = sums.map(s => {
        const sum = s + root.val;
        if (sum === targetSum) {
            count++;
        }
        return sum;
    });

    sums.push(root.val);

    count += dfs(root!.left, targetSum, sums);
    count += dfs(root!.right, targetSum, sums);

    return count;
}
