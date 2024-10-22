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

function pairSum(head: ListNode | null): number {
    let current = head;
    let reversed: ListNode | null = null;
    let size = 0;
    let count = 0;
    let max = 0;
    
    while(current) {
        current = current.next;
        size++;
    }

    current = head;

    while(count < size / 2) {
        const next = current.next;
        current.next = reversed;
        reversed = current;
        current = next;
        count++;
    }

    while(current && reversed) {
        max = Math.max(current.val + reversed.val, max);
        current = current.next;
        reversed = reversed.next;
    }

    return max;
};