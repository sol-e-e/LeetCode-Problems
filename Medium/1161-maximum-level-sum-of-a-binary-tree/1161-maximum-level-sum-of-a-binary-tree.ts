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
    let answer = 1;
    let max = root.val;
    let level = 1;
    const queue = [];

    queue.push(root);

    while(queue.length) {
        let levelSize = queue.length;
        let sum = 0;
        while(levelSize) {
            let cur = queue.shift();
            sum += cur.val;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            levelSize--;
        }
        if (sum > max) {
            answer = level;
            max = sum;
        }
        level++;
    }

    return answer;
};