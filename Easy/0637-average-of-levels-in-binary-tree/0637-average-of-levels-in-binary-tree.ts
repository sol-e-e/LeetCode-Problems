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

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];
    const queue: TreeNode[] = [root];
    const result: number[] = [];

    while (queue.length) {
        const temp = [];
        let sum = 0;
        let count = 0;

        while (queue.length) {
            const node = queue.pop();
            sum += node.val;
            count += 1;

            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
        }

        result.push(Number((sum / count).toFixed(5)));
        queue.push(...temp);
    }

    return result;
};