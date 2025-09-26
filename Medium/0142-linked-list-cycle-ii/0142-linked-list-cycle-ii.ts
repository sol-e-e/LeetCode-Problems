/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    const hash = new Map<number, Set<ListNode | null>>();
    let p = head;

    while (p) {
        if (!hash.has(p.val)) hash.set(p.val, new Set());
        if (hash.get(p.val).has(p)) {
            return p;
        }

        hash.get(p.val).add(p);
        p = p.next;
    }

    return null;
};