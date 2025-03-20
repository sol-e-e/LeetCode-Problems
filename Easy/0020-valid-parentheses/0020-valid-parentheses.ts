function isValid(s: string): boolean {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];
        const last = stack.length ? stack[stack.length - 1] : undefined;

        if (bracket === ')' && last === '(') {
            stack.pop();
        } else if (bracket === ']' && last === '[') {
            stack.pop();
        } else if (bracket === '}' && last === '{') {
            stack.pop();
        } else {
            stack.push(bracket)
        }
    }

    return stack.length === 0;
};