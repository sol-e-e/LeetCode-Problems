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
    let s1 = [], s2 = [];

    while (l1) {
        s1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        s2.push(l2.val);
        l2 = l2.next;
    }

    let node: ListNode | null = null;
    let carry = 0;

    while (s1.length || s2.length || carry) {
        const n1 = s1.pop() || 0;
        const n2 = s2.pop() || 0;
        const sum = n1 + n2 + carry;
        
        carry = Math.floor(sum / 10);
        const newNode = new ListNode(sum % 10);
        newNode.next = node;
        node = newNode;
    }

    return node;
};