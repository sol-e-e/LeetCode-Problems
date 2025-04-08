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

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let count: number = 0;
    let height: number = getHeight(root);

    while(root) {
        if (getHeight(root.right) === height - 1) {
            count += 1 << height; // 왼쪽 서브 트리 노드 수 + root 1;
            root = root.right;
        } else {
            count += 1 << (height - 1); // 오른쪽 서브 트리 노드 수 + root 1;
            root = root.left;
        }

        height--;
    }

    return count;
};

function getHeight(node: TreeNode | null): number {
    return node === null ? -1 : 1 + getHeight(node.left);
}
