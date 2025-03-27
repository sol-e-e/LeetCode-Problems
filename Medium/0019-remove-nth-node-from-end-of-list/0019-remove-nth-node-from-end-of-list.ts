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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let pseudo = new ListNode();
    pseudo.next = head;
    let count = 0;
    let prev = pseudo;
    let current = head;

    while (current) {
        count += 1;
        current = current.next;
    }

    current = head;

    while (count > n) {
        const next = current.next;
        prev = current;
        current = next;
        count -= 1;
    }

    prev.next = current.next;

    return pseudo.next;
};