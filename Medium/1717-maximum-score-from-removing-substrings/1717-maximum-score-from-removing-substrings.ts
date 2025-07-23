function maximumGain(s: string, x: number, y: number): number {
    let maxScore = 0;
    let stack = [];
    let str = s.split('');

    function gainScore(str: string[], prefer: string, score: number) {
        for (let l of str) {
            if (l === prefer[1] && stack[stack.length - 1] === prefer[0]) {
                stack.pop();
                maxScore += score;
                continue;
            }
            stack.push(l);
        }
    }

    gainScore(str, x > y ? 'ab' : 'ba', Math.max(x, y));

    str = stack;
    stack = [];

    gainScore(str, x > y ? 'ba' : 'ab', Math.min(x, y));

    return maxScore;
};

