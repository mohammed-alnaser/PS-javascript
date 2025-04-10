/*Reverse Nodes in k-Group – Reverse every k nodes in a linked list.
 */

function reverseKGroup(head, k) {
    let curr = head;
    let count = 0;
    while (curr && count < k) {
        curr = curr.next;
        count++;
    }
    if (count === k) {
        curr = reverseKGroup(curr, k);
        while (count-- > 0) {
            const temp = head.next;
            head.next = curr;
            curr = head;
            head = temp;
        }
        head = curr;
    }
    return head;
}