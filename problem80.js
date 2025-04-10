/*Merge k Sorted Lists – Merge k sorted linked lists into one sorted list.
 */

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    for (const list of lists) if (list) minHeap.insert(list);
    const dummy = new ListNode();
    let curr = dummy;
    while (minHeap.size()) {
        const node = minHeap.extract();
        curr.next = node;
        curr = curr.next;
        if (node.next) minHeap.insert(node.next);
    }
    return dummy.next;
}
class MinHeap {
    constructor() { this.heap = []; }
    insert(node) { /* ... */ }
    extract() { /* ... */ }
}