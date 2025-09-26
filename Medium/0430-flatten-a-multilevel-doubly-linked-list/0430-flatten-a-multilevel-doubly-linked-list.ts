/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     prev: _Node | null
 *     next: _Node | null
 *     child: _Node | null
 *     
 *     constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */


function flatten(head: _Node | null): _Node | null {
    let current = head;
    const stack = [];
    
    while (current) {
        if (current.child) {
            if (current.next) stack.push(current.next);
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
        } else if (!current.next && stack.length > 0) {
            const node = stack.pop();
            current.next = node;
            node.prev = current;
        }
        current = current.next;
    }

    return head;
};