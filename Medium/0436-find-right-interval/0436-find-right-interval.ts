function findRightInterval(intervals: number[][]): number[] {
    const n = intervals.length;
    let result: number[] = new Array(n).fill(-1);
    const indexedIntervals: [number[], number][] = intervals.map((interval, index) => [interval, index]);
    indexedIntervals.sort(([a], [b]) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        const [interval, originalIndex] = indexedIntervals[i];
        const target = interval[1];

        let left = 0, right = n - 1;
        
        if (target > indexedIntervals[n - 1][0][0]) {
            continue;
        }

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (indexedIntervals[mid][0][0] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result[originalIndex] = indexedIntervals[left][1];
    }

    return result;
};