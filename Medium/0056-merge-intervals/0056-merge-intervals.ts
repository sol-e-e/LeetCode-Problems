function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const result: number[][] = [intervals[0]];
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [num1, num2] = intervals[i];
        if (num1 <= end) {
            const [prev1, prev2] = result.pop();
            end = Math.max(num2, prev2);
            result.push([prev1, end]);
        } else {
            result.push([num1, num2]);
            end = num2;
        }

    }

    return result;
};