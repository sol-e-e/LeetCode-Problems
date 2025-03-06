function romanToInt(s: string): number {
    const symbols: { [key: string]: number } = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let answer = 0;
    let before = 1001;
    
    for (const symbol of s) {
        const current = symbols[symbol];
        answer += before < current ? current - (before * 2) : current;
        before = current;
    }

    return answer;
};