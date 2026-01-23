function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const adjList: number[][] = Array(n).fill([]).map(() => []);
    const result: number[] = [];

    for (let [from, to] of edges) {
        adjList[to].push(from);
    }
    
    adjList.forEach((l, i) => {
        if (l.length === 0) result.push(i);
    })

    return result;
};