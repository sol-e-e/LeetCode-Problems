function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const stack: number[] = [];
    let maxArea: number = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            const h = heights[stack.pop()];
            const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i);
    }

    while (stack.length) {
        const h = heights[stack.pop()];
        const w = stack.length ? n - stack[stack.length - 1] - 1 : n;
        maxArea = Math.max(maxArea, w * h);
    }

    return maxArea;
};