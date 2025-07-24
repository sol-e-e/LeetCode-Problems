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

function swapPairs(head: ListNode | null): ListNode | null {
    function swap(node: ListNode | null): ListNode | null {
        if (!node || !node.next) return node;
        let front = node.next;
        node.next = swap(front.next);
        front.next = node;
        return front;
    }
    
    return swap(head);
};