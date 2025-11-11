function divideString(s: string, k: number, fill: string): string[] {
    const len = s.length;
    const groups = Math.ceil(len / k);
    const result = [];
        console.log(s)

    for (let i = 0; i < groups; i++) {
        const group = s.substring(i * k, i * k + k).padEnd(k, fill);
        result.push(group);
    }
    
    return result;
};