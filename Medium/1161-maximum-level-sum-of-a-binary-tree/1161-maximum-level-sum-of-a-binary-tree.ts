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

function maxLevelSum(root: TreeNode | null): number {
    let maxLevel = 1;
    let maxSum = root.val;
    let curLevel = 1;
    const queue = [];

    queue.push(root);

    while(queue.length) {
        let len = queue.length;
        let levelSum = 0;
        for(let i = 0; i < len; ++i) {
            const cur = queue.shift();
            levelSum += cur.val;

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        if (levelSum > maxSum) {
            maxLevel = curLevel;
            maxSum = levelSum;
        }
        curLevel++;
    }

    return maxLevel;
};