function networkDelayTime(times: number[][], n: number, k: number): number {
    const graph = Array.from({length: n + 1}, () => []);

    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    const distance = Array(n + 1).fill(Infinity);
    const visited = Array(n + 1).fill(false);
    distance[k] = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 1; j <= n; j++) {
            if (!visited[j] && (u === -1 || distance[j] < distance[u])) {
                u = j;
            }
        }

        if (distance[u] === Infinity) break;
        visited[u] = true;

        for (const [v, w] of graph[u]) {
            distance[v] = Math.min(distance[v], distance[u] + w);
        }
    }

    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (distance[i] === Infinity) return -1;
        maxTime = Math.max(maxTime, distance[i]);
    }

    return maxTime;
};