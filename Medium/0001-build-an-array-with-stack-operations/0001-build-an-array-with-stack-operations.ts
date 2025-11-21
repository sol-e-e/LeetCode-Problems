function buildArray(target: number[], n: number): string[] {
    const result: ('Push' | 'Pop')[] = [];
    let idx = 0;

    for (let i = 1; i <= n; i++) {
        if (target[idx] === i) {
            result.push('Push');
            if (++idx === target.length) return result;
        } else {
            result.push('Push', 'Pop');
        }
    }

    return result;
};