function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const hash = new Set<string>(bank);
    let count = 0;
    let queue: string[] = [startGene];

    while (queue.length) {
        const next: string[] = [];

        while (queue.length) {
            const current = queue.shift();
            if (current === endGene) return count;
            hash.delete(current);
            for (const str of hash.values()) {
                if (getDiffCount(current, str) === 1) {
                    next.push(str);
                }
            }
        }
        queue = next;
        count += 1;
    }

    return -1;
};

function getDiffCount(str1: string, str2: string) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count += 1;
    }

    return count;
}