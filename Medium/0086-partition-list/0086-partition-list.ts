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

function partition(head: ListNode | null, x: number): ListNode | null {
    let currentHead = new ListNode(0, head);
    let current = currentHead;
    let smallerHead = new ListNode();
    let smaller = smallerHead;

    while (current.next) {
        if (current.next.val < x) {
            smaller.next = current.next;
            smaller = current.next;
            current.next = current.next.next;
        } else {
            smaller.next = null;
            current = current.next;
        }
    }

    smaller.next = currentHead.next;

    return smallerHead.next;
};