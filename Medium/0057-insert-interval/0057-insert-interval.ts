function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [start, end] = [0, intervals.length - 1];
    let [p1, p2] = [0, intervals.length - 1];
    const [num1, num2] = newInterval;

    while (p1 <= p2) {
        const mid = Math.floor((p1 + p2) / 2);
        if (intervals[mid][1] < num1) {
            p1 = mid + 1;
        } else {
            p2 = mid - 1;
        }
    }

    start = p1;
    [p1, p2] = [0, intervals.length - 1];

     while (p1 <= p2) {
        const mid = Math.floor((p1 + p2) / 2);
        if (intervals[mid][0] <= num2) {
            p1 = mid + 1;
        } else {
            p2 = mid - 1;
        }
    }

    end = p2;

    intervals.splice(start, end - start + 1, [Math.min(intervals[start][0], num1), Math.max(intervals[end][1], num2)]);

    return intervals;
};