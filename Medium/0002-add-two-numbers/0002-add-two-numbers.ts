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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carryOver = 0;
    let head = new ListNode(-1);
    let current = head;

    while (l1 || l2) {
        let sum = carryOver;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum > 9) {
            current.next = new ListNode(sum % 10);
            carryOver = 1;
        } else {
            current.next = new ListNode(sum);
            carryOver = 0; 
        }
 
        current = current.next;
    }

    if (carryOver) current.next = new ListNode(1);

    return head.next;
};