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

const memo: Map<number, Array<TreeNode | null>> = new Map();

function allPossibleFBT(n: number): Array<TreeNode | null> {
    const result: Array<TreeNode | null> = [];

    if (n % 2 === 0) return result;

    if (memo.has(n)) return memo.get(n)!;

    if (n === 1) {
        result.push(new TreeNode(0));
        return result;
    }

    n -= 1;

    for (let i = 0; i < n; i++) {
        const left: Array<TreeNode | null> = allPossibleFBT(i);
        const right: Array<TreeNode | null> = allPossibleFBT(n - i);

        for (let l of left) {
            for (let r of right) {
                const current = new TreeNode(0);
                current.left = l;
                current.right = r;

                result.push(current);
            }
        }
    }

    memo.set(n, result);

    return result;
};