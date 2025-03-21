function evalRPN(tokens: string[]): number {
    const operators: { [key: string]: (a: number, b: number) => number } = {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
        '/': (a: number, b: number) => a / b | 0,
    }
    const nums: number[] = [];
    for (const token of tokens) {
        if (operators[token] !== undefined) {
            const [rear, front] = [nums.pop(), nums.pop()];
            nums.push(operators[token](front, rear));
        } else {
            nums.push(Number(token));
        }
    }

    return nums[0];
};