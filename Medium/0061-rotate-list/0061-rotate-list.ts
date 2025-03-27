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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;
    let result: ListNode | null 
    let size = 0;
    let current = head;

    while (current) {
        size += 1;
        current = current.next;
    }

    k = k % size;

    let fast = head;
    let slow = head;

    while (k--) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    result = slow.next;
    slow.next = null;
    fast.next = head;

    return result;
};