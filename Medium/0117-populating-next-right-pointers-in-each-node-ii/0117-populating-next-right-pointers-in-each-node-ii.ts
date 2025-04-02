/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 * 
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function connect(root: _Node | null): _Node | null {
    if (!root) return null;

    root.next = null;

    let dummy = new _Node();
    let current: _Node | null = root;

    while (current) {
        dummy.next = null;
        let child = dummy;

        while (current) {
            if (current.left) {
                child.next = current.left;
                child = child.next;
            }
            if (current.right) {
                child.next = current.right;
                child = child.next;
            }
            current = current.next;
        }

        current = dummy.next;
    }

    return root;
};