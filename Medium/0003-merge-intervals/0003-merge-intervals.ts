function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let result: number[][] = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = result.length - 1;
        if (result[last][1] >= intervals[i][0]) {
            result[last][1] = Math.max(result[last][1], intervals[i][1]);
        } else {
            result.push(intervals[i])
        }
    }
    return result;
};