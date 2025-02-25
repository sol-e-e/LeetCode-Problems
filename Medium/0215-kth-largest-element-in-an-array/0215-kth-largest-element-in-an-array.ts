function findKthLargest(nums: number[], k: number): number {
    let heap = [];

    for (let i = 0; i < nums.length; i++) {
        heap.push(nums[i]);
        let current = heap.length - 1;

        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (heap[parent] <= heap[current]) break;
            [heap[parent], heap[current]] = [heap[current], heap[parent]];
            current = parent;
        }
        
        if (heap.length > k) {
            let min = heap[0];
            heap[0] = heap.pop();
            let index = 0;
            while (2 * index + 1 < heap.length) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smaller = left;

                if (right < heap.length && heap[right] < heap[left]) {
                    smaller = right;
                }

                if (heap[index] < heap[smaller]) break;
                [heap[index], heap[smaller]] = [heap[smaller], heap[index]];
                index = smaller;
            }
        }
    }

    return heap[0];
};