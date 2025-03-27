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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    let pseudo = new ListNode(-101, head);
    let prev = pseudo;
    let current = head;

    while (current) {
        if (current.next && current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            prev.next = current.next;
        } else {
            prev = prev.next;
        }

        current = current.next;
    }

    return pseudo.next;
};