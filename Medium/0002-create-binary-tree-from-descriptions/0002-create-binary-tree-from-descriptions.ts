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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const nodes = new Map<number, TreeNode>();
    const children = new Set<number>();

    for (const [parent, child, isLeft] of descriptions) {
        if (!nodes.has(parent)) {
            nodes.set(parent, new TreeNode(parent));
        }
        if (!nodes.has(child)) {
            nodes.set(child, new TreeNode(child));
        }

        const parentNode = nodes.get(parent)!;
        const childNode = nodes.get(child)!;
        if (isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
        children.add(child);
    }

    for (const [val, node] of nodes) {
        if (!children.has(val)) {
            return node;
        }
    }
};