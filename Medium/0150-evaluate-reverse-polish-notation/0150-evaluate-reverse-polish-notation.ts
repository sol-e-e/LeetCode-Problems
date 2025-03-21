type OperatorsMap = Map<string, (a: number, b: number) => number>
function evalRPN(tokens: string[]): number {
    const operators: OperatorsMap = new Map([
        ['+', (a: number, b: number) => a + b],
        ['-', (a: number, b: number) => a - b],
        ['*', (a: number, b: number) => a * b],
        ['/', (a: number, b: number) => a / b | 0]
    ]);

    const nums: number[] = [];
    for (const token of tokens) {
        if (operators.has(token)) {
            const [rear, front] = [nums.pop(), nums.pop()];
            nums.push(operators.get(token)(front, rear));
        } else {
            nums.push(Number(token));
        }
    }

    return nums[0];
};