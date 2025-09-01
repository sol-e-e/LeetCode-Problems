function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const ratioIncrement = (pass: number, total: number): number => {
        return (pass + 1) / (total + 1) - pass / total;
    }

    const maxHeap = new MaxHeap();
    for (let [pass, total] of classes) {
        maxHeap.insert([ratioIncrement(pass, total), pass, total]);
    }

    for (let i = 0; i < extraStudents; i++) {
        const [_, pass, total] = maxHeap.extract()!;
         maxHeap.insert([ratioIncrement(pass + 1, total + 1), pass + 1, total + 1]);
    }

    let totalRatio = 0;
    while (maxHeap.heap.length > 0) {
        const [_, pass, total] = maxHeap.extract()!;
        totalRatio += pass / total;
    }

    return totalRatio / classes.length;
};

class MaxHeap {
    heap: [number, number, number][] = []; // ratio increment, pass, total
    public insert(item: [number, number, number]) {
        this.heap.push(item);
        this.heapifyUp();
    }

    public extract(): [number, number, number] | undefined {
        if (this.heap.length === 0) return undefined;

        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return max;
    }

    private heapifyUp() {
        let index = this.heap.length - 1;
        const el = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (el[0] <= parent[0]) break;

            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = el;
    }

    private heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let targetIndex = index;

            if (leftChildIndex < length && 
            this.heap[leftChildIndex][0] > this.heap[targetIndex][0]) {
                targetIndex = leftChildIndex;
            }

             if (rightChildIndex < length && 
            this.heap[rightChildIndex][0] > this.heap[targetIndex][0]) {
                targetIndex = rightChildIndex;
            }

            if (targetIndex === index) break;
            [this.heap[targetIndex], this.heap[index]] = [this.heap[index], this.heap[targetIndex]];
            index = targetIndex;
        }
    }
}
