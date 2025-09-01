function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const heap = new Heap();
    for (let [pass, total] of classes) {
        heap.insert([pass, total]);
    }

    for (let i = 0; i < extraStudents; i++) {
        const {pass, total} = heap.extract();
        heap.insert([pass + 1, total + 1]);
    }

    return heap.getRatio();
};

type HeapType = { pass: number, total: number, ratio: number, change: number };

class Heap {
    private heap: HeapType[]
    constructor() {
        this.heap = [];
    }

    compare(parent: HeapType, child: HeapType) {
        return parent.change - child.change;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value: number[]) {
        const [pass, total] = value;
        this.heap.push({pass, total, ratio: pass / total, change: (pass + 1) / (total + 1) - pass / total});
        this.heapifyUp();
    }

    extract(): HeapType | null {
        if (this.heap.length === 0) return null;
        
        const max = this.heap[0];
        const last = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = last!;
            this.heapifyDown();
        }
        
        return max;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
             if (this.compare(this.heap[parentIndex], this.heap[index]) < 0) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = index * 2 + 1;
            const rightChildIndex = index * 2 + 2;
            let largest = index;

            if (leftChildIndex < length && 
            this.compare(this.heap[largest], this.heap[leftChildIndex]) < 0) {
                largest = leftChildIndex;
            }

            if (rightChildIndex < length && 
            this.compare(this.heap[largest], this.heap[rightChildIndex]) < 0) {
                largest = rightChildIndex;
            }

            if (largest === index) break;
            
            this.swap(index, largest);
            index = largest;
        }
    }

    getRatio() {
        return this.heap.reduce((acc, {ratio}) => acc + ratio, 0) / this.heap.length;
    }
}