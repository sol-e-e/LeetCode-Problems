function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (const [u, v, w] of edges) {
        dist[u][v] = w;
        dist[v][u] = w;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    let min = Infinity;
    let city = -1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                if (dist[i][j] <= distanceThreshold) {
                    count += 1;
                }
            }
        }
        if (count <= min) {
            min = count;
            city = i;
        }
    }

    return city;
};