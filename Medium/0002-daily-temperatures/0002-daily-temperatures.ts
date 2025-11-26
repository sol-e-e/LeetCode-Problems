function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const result: number[] = new Array(n).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};