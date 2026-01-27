function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = Array.from({length: n}, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = Array(n).fill(false);
    const queue = [source];
    visited[source] = true;

    while (queue.length) {
        const current = queue.shift();
        
        for (let next of graph[current]) {
            if (next === destination) return true;
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }

    return source === destination;
};