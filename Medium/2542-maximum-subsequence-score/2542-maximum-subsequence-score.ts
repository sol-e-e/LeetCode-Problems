function maxScore(nums1: number[], nums2: number[], k: number): number {
    let score = 0;
    nums1 = nums2.map((value, index) => ({value, index})).sort((a, b) => b.value - a.value).map(obj => nums1[obj.index]);
    nums2.sort((a, b) => b - a);
    let heap: MinHeap = new MinHeap();

    for (let i = 0; i < nums2.length; i++) {
        if (i >= k - 1) {
            let max = (heap.getMax() + nums1[i]) * nums2[i];
            score = max > score ? max : score;
        }
        if (heap.size() < k - 1) {
            heap.push(nums1[i]);
        } else if (nums1[i] > heap.peek()!) {
            heap.pop();
            heap.push(nums1[i]);
        }
    }

    return score;
};

class MinHeap {
    private heap: number[] = [];

    push(num: number) {
        this.heap.push(num);
        this.heapifyUp();
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    getMax() {
        return this.heap.reduce((a, c) => a + c, 0);
    }

    private heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    private heapifyDown() {
        let index = 0;
        while (index * 2 + 1 < this.heap.length) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smaller = left;

            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smaller = right;
            }

            if (this.heap[index] <= this.heap[smaller]) break;
            [this.heap[index], this.heap[smaller]] = [this.heap[smaller], this.heap[index]];
            index = smaller;
        }
    }
}