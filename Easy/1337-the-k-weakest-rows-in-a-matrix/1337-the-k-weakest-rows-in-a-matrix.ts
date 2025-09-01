function kWeakestRows(mat: number[][], k: number): number[] {
    const result = [];

    const strengthOfRow = (m: number[]) => {
        let count = 0;
        while (count < m.length && m[count] === 1) {
            count++;
        }
        return count;
    }

    const minHeap = new MinHeap();

    for (let i = 0; i < mat.length; i++) {
        minHeap.push([strengthOfRow(mat[i]), i]);
    }

    for (let i = 0; i < k; i++) {
        const [_, indice] = minHeap.pop();
        result.push(indice);
    }

    return result;
};

class MinHeap {
    heap: [number, number][] = []; // [soliders, indice]

    private compare(a: [number, number], b: [number, number]) {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    }

    private swap(index1: number, index2: number) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    public push(value: [number, number]) {
        this.heap.push(value);
        this.bubbleUp();
    }

    public pop(): [number, number] | undefined {
        if (this.heap.length === 0) return undefined;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return min;
    }
 
    private bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.compare(this.heap[index], parent) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let targetIndex = index;

            if (leftChildIndex < length && 
            this.compare(this.heap[leftChildIndex], this.heap[targetIndex]) < 0) {
                targetIndex = leftChildIndex;
            }

            if (rightChildIndex < length && 
            this.compare(this.heap[rightChildIndex], this.heap[targetIndex]) < 0) {
                targetIndex = rightChildIndex;
                
            }

            if (targetIndex === index) break;
            this.swap(index, targetIndex);
            index = targetIndex;
        }
    }
}