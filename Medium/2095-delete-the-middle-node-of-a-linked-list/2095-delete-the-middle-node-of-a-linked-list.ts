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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let node = head;
    let size = 0;
    let index = 0;
    let count = 0;
    let prev = null;

    while(node) {
        size++;
        node = node.next;
    }

    node = head;
    index = Math.floor(size / 2);

    if (index === 0) {
        head = node.next;
    } else {
        while (count < index) {
            prev = node;
            node = node.next;
            count++;
        }
        prev.next = node.next;
    }

    return head;
};