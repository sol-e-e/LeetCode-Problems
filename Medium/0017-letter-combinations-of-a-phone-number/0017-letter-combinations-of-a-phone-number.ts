function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const result = [];

    const map: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    function backtrack(current: string, remain: string) {
        if (!remain.length) {
            result.push(current);
        } else {
            for (const letter of map[remain[0]]) {
                backtrack(current + letter, remain.slice(1));
            }
        }
    }

    backtrack("", digits)

    return result;
};