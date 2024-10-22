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
    if (head === null || head.next === null) return head;

    let oddNode: ListNode | null = head;
    let evenNode: ListNode | null = head.next;
    const evenHead: ListNode | null = evenNode;

    while(evenNode !== null && evenNode.next !== null) {
        oddNode.next = oddNode.next.next;
        evenNode.next = evenNode.next.next;

        oddNode = oddNode.next;
        evenNode = evenNode.next;

    }

    oddNode.next = evenHead;

    return head;
};