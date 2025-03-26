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

function hasCycle(head: ListNode | null): boolean {
    let current: ListNode | null = head;
    const seen = new Set<number>();

    while (current !== null && current.next !== null) {
        if (seen.has(current.val)) return true;
        seen.add(current.val);
        const next = current.next;
        current = next;
    }

    return false;
};