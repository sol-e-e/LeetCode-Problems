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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    let queue = [root];
    let level = 0;

    while (queue.length) {
        const size = queue.length;

        if (level % 2) {
            for (let i = 0; i < size / 2; i++) {
                let start = queue[i];
                let end = queue[size - i - 1];

                [start.val, end.val] = [end.val, start.val];
            }
        }

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        level++;
    }

    return root;
};