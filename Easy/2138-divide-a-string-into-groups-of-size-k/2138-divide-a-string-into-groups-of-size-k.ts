function divideString(s: string, k: number, fill: string): string[] {
    const len = s.length;
    const groups = Math.ceil(len / k);
    const result = [];

    for (let i = 0; i < groups; i += k) {
        const group = s.substring(i, i + k).padEnd(k, fill);
        result.push(group);
    }
    
    return result;
};