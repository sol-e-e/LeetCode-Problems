function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    const heap = new Heap<HeapType>((a, b) => a.num - b.num || a.idx - b.idx);
    nums.forEach((num, idx) => heap.enqueue({num, idx}));

    while (k-- > 0) {
        const item = heap.dequeue()!;
        nums[item.idx] = item.num * multiplier;
        heap.enqueue({num: nums[item.idx], idx: item.idx});
    }
    return nums;
};

type HeapType = { num: number, idx: number };

class Heap<T>{
    private heap: T[] = [];
    private compareFn: (a: T, b: T) => number;

    constructor(compareFn: (a: T, b: T) => number) {
        this.compareFn = compareFn;
    }

    enqueue(value: T) {
        this.heap.push(value);
        this.heapifyUp();
    }

    dequeue(): T | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return value;
    }

    private swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    private heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compareFn(this.heap[index], this.heap[parentIndex]) >= 0) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let targetIndex = leftChildIndex;
            if (rightChildIndex < this.heap.length && this.compareFn(this.heap[rightChildIndex], this.heap[targetIndex]) < 0) {
                targetIndex = rightChildIndex;
            }

            if (this.compareFn(this.heap[index], this.heap[targetIndex]) <= 0) break;

            this.swap(index, targetIndex);
            index = targetIndex;
        }
    }
}