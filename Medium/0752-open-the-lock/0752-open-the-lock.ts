function openLock(deadends: string[], target: string): number {
    const dead = new Set(deadends);
    const seen = new Set(['0000']);
    let queue = ['0000'];
    let count = 0;

    while (queue.length) {
        const next: string[] = [];

        while (queue.length) {
            const current = queue.shift();
            if (dead.has(current)) continue;
            if (current === target) return count;
            for (let str of getNextStates(current)) {
                if (seen.has(str)) continue;
                seen.add(str);
                next.push(str);
            }
        }

        queue = next;
        count++;
    }

    return -1;
};

function getNextStates(s: string): string[] {
    const answer: string[] = [];

    for (let i = 0; i < s.length; i++) {
        answer.push(s.slice(0, i) + ((Number(s[i]) + 1) % 10).toString() + s.slice(i + 1));
        answer.push(s.slice(0, i) + ((Number(s[i]) + 9) % 10).toString() + s.slice(i + 1));
    }

    return answer;
}