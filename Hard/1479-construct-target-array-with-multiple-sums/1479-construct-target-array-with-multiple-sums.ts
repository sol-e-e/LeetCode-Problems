function isPossible(target: number[]): boolean {
    if (target.length === 1 && target[0] !== 1) return false;
    const heap = new MaxHeap<number>();
    let sum = 0;

    for (let t of target) {
        heap.push(t);
        sum += t;
    }

    while (heap.top() > 1) {
        const top = heap.pop();
        const next = top - (sum - top) * (Math.trunc(top / (sum - top) - 1) || 1);
        if (next < 1) return false; 
        heap.push(next);
        sum = sum - top + next;
    }

    return true;
};