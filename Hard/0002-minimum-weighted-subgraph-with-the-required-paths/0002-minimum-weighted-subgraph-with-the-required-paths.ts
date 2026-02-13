function minimumWeight(n: number, edges: number[][], src1: number, src2: number, dest: number): number {
    const graph = Array.from({ length: n }, () => [] as [number, number][]);
    const reverseGraph = Array.from({ length: n }, () => [] as [number, number][]);

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        reverseGraph[v].push([u, w]);
    }

    const distToDest = dijkstra(reverseGraph, dest);

    if (distToDest[src1] === Infinity || distToDest[src2] === Infinity) return -1;

    const distFromSrc1 = dijkstra(graph, src1);
    const distFromSrc2 = dijkstra(graph, src2);

    let minDist = Infinity;
    for (let k = 0; k < n; k++) {
        minDist = Math.min(minDist, distFromSrc1[k] + distFromSrc2[k] + distToDest[k]);
    }

    return minDist;

    function dijkstra(graph: [number, number][][], start: number): number[] {
        const distance = Array(n).fill(Infinity);
        const pq = new MinPriorityQueue<[number, number]>({compare: (a, b) => a[0] - b[0]});
        distance[start] = 0;
        pq.enqueue([0, start]);

        while (!pq.isEmpty()) {
            const [dist, u] = pq.dequeue()!;

            if (dist > distance[u]) continue;

            for (const [v, w] of graph[u]) {
                if (dist + w < distance[v]) {
                    distance[v] = dist + w;
                    pq.enqueue([distance[v], v]);
                }
            }
        }
        return distance;
    }
};
