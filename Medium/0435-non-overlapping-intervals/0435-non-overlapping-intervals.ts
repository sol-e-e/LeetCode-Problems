function eraseOverlapIntervals(intervals: number[][]): number {
    const sorted = intervals.sort(([as, ae], [bs, be]) => ae - be);
    let lastEnd = -Infinity;
    let result = 0;
    for (const [start, end] of sorted) {
        if (start >= lastEnd) {
            lastEnd = end;
        } else {
            result++;
        }
    }
    return result;
};