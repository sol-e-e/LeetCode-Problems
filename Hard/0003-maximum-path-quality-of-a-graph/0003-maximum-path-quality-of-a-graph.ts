function maximalPathQuality(values: number[], edges: number[][], maxTime: number): number {
    let answer = 0;
    const n = values.length;
    const graph = Array(n).fill(0).map(() => []);
    const visited = new Set<number>([0]);

    for (let [u, v, time] of edges) {
        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }

    function backtracking(node: number, quality: number, time: number) {
        if (node === 0) {
            answer = Math.max(answer, quality);
        }

        for (let [next, edgeTime] of graph[node]) {
            const newTime = time + edgeTime;
            if (newTime <= maxTime) {
                const wasVisited = visited.has(next);
                const newQuality = quality + (wasVisited ? 0 : values[next]);
                if (!wasVisited) visited.add(next);
                backtracking(next, newQuality, newTime);
                if (!wasVisited) visited.delete(next);
            }
        }
    }

    backtracking(0, values[0], 0);

    return answer;
};