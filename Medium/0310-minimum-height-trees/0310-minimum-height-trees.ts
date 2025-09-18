function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n <= 1) return [0];
    let graph: Record<string, number[]> = {};

    for (let [a, b] of edges) {
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    const [fartest, _] = bfs(n, graph, 0);
    const [end, path] = bfs(n, graph, fartest);

    const i = Math.floor(path.length / 2);

    return path.length % 2 ?  [path[i]] : [path[i], path[i - 1]];
};

function bfs(n: number, graph: Record<string, number[]>, start: number): [number, number[]] {
    let queue = [start];
    let visited = new Set<number>().add(start);
    let distance = Array(n).fill(0);
    let farthest: number = start;
    let max: number = 0;
    let path = [start];

    while (queue.length) {
        const cur = queue.shift();
        
        for (let n of graph[cur]) {
            if (visited.has(n)) continue;
            visited.add(n);
            distance[n] = distance[cur] + 1;
            queue.push(n);

            if (distance[n] > max) {
                max = distance[n];
                farthest = n;
                path.push(n);
            }
        }
    }

    return [farthest, path];
}