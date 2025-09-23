function networkDelayTime(times: number[][], n: number, k: number): number {
    const delays = Array(n + 1).fill(Infinity);
    delays[k] = 0;

    for (let i = 1; i < n; i++) {
        let count = 0;
        for (let [u, v, w] of times) {
            if (delays[u] === Infinity) continue;
            if (delays[v] > delays[u] + w) {
                delays[v] = delays[u] + w;
                count += 1;
            }
        }
        if (count === 0) break;
    }

    delays.shift();
    const result = Math.max(...delays);
    return result === Infinity ? -1 : result;
};