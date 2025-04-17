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

function sortList(head: ListNode | null): ListNode | null {
    if (!head) return head;

    function merge(left: ListNode | null, right: ListNode | null) {
        if (!left || !right) return null;
        let head = new ListNode();
        let node = head;

        while (left && right) {
            if (left.val < right.val) {
                node.next = new ListNode(left.val);
                left = left.next;
            } else {
                node.next = new ListNode(right.val);
                right = right.next;
            }
            node = node.next;
        }

        if (left) node.next = left;
        if (right) node.next = right;

        return head.next;
    }

    function mergeSort(head: ListNode | null) {
        if (!head || !head.next) return head;
        let slow = head;
        let fast = head;
        let leftTail: ListNode | null;

        while (fast && fast.next) {
            leftTail = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        fast = head;
        if (leftTail) {
            leftTail.next = null;
        }

        return merge(mergeSort(fast), mergeSort(slow));
    }

    return mergeSort(head);
};