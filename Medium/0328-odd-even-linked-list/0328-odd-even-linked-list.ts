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

function oddEvenList(head: ListNode | null): ListNode | null {
    let node = head;
    let odd = null;
    let even = null;
    let evenhead = null;
    let index = 0;

    while(node) {
        const current = node;
        if (index % 2 === 0) {
            if (odd !== null) {
                odd.next = current;
                odd = odd.next;
            } else {
                odd = current;
            }
        } else {
            if (even !== null) {
                even.next = current;
                even = even.next;
            } else {
                even = current;
                evenhead = current;
            }
        }
        node = node.next;
        index++;
    }

    if (odd !== null) odd.next = evenhead;
    if (even !== null) even.next = null;

    return head;
};