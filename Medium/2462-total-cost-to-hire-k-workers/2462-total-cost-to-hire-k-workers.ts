function totalCost(costs: number[], k: number, candidates: number): number {
    let result = 0;
    let left: number[] = [], right: number[] =[];
    let [low, high] = [0, costs.length - 1];

    while (low <= candidates - 1 && low < high) {
        left.push(costs[low]);
        heapifyUp(left);
        right.push(costs[high]);
        heapifyUp(right);
        low++;
        high--;
    }

    for (let i = 0; i < k; i++) {
        if (left[0] <= right[0]) {
            result += left.shift();
            heapifyDown(left);
            if (low <= high) {
                left.push(costs[low]);
                heapifyUp(left)
                low++;
            }
        } else {
            result += right.shift();
            heapifyDown(right);
            if (low <= high) {
                right.push(costs[high]);
                heapifyUp(right);
                high--;
            }
        }
    }

    return result;
};

function heapifyUp(arr: number[]) {
    let index = arr.length - 1;
    while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (arr[parent] <= arr[index]) break;
        [arr[parent], arr[index]] = [arr[index], arr[parent]];
        index = parent;
    }
}

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