type HeapType = { pair: [number, number], sum: number };
class MaxHeap {
    heap: HeapType[];
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    add(a: number, b: number) {
        this.heap.push({ pair: [a, b], sum: a + b });
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].sum < this.heap[index].sum) {
                this.swap(parentIndex, index);
            }
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        while (index < this.heap.length) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let maxIndex = index;

            if (this.heap[leftIndex] && this.heap[index] < this.heap[leftIndex]) {
                maxIndex = leftIndex;
            };
            if (this.heap[rightIndex] && this.heap[index] < this.heap[rightIndex]) {
                maxIndex = rightIndex;
            };
            if (index === maxIndex) break;
            this.swap(index, maxIndex);
            index = maxIndex;
        }
    }

    getPairs() {
        return this.heap.map(({pair}) => pair);
    }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const heap = new MaxHeap();
    for (let n1 of nums1) {
        for (let n2 of nums2) {
            heap.add(n1, n2);
            if (heap.size() > k) {
                heap.pop();
            }
        }
    }

    return heap.getPairs();
};