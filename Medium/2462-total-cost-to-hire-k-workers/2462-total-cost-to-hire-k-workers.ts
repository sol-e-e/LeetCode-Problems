function totalCost(costs: number[], k: number, candidates: number): number {
    let result = 0;
    let leftHeap = new MinHeap();
    let rightHeap = new MinHeap();
    let [low, high] = [0, costs.length - 1];

     while (low < candidates && low <= high) {
        leftHeap.push(costs[low]);
        if (low !== high) rightHeap.push(costs[high]);
        low++;
        high--;
    }

    for (let i = 0; i < k; i++) {
        if (leftHeap.size() === 0) {
            result += rightHeap.pop();
        } else if (rightHeap.size() === 0) {
            result += leftHeap.pop();
        } else {
            if (leftHeap.peek()! <= rightHeap.peek()!) {
                result += leftHeap.pop()!;
                if (low <= high) leftHeap.push(costs[low++]);
            } else {
                result += rightHeap.pop()!;
                if (low <= high) rightHeap.push(costs[high--]);
            }
        }
     
    }

    return result;
};


function heapifyDown(arr: number[]) {
    let index = 0;
    while (index * 2 + 1 < arr.length) {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let smaller = left;

        if (right < arr.length && arr[right] < arr[left]) {
            smaller = right;
        }
        if (arr[index] <= arr[smaller]) break;
        [arr[smaller], arr[index]] = [arr[index], arr[smaller]];
        index = smaller;
    }
}

class MinHeap {
    heap: number[] = [];

    size() {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0] ?? Infinity;
    }

    push(num: number) {
        this.heap.push(num);
        this.heapifyUp();
    }

    pop(): number {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
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
            [this.heap[smaller], this.heap[index]] = [this.heap[index], this.heap[smaller]];
            index = smaller;
        }
    }
}