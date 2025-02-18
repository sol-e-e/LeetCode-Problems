function dailyTemperatures(temperatures: number[]): number[] {
    let result: number[] = new Array(temperatures.length).fill(0);
    let stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result
};