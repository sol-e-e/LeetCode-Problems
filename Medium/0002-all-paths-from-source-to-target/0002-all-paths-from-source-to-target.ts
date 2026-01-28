function allPathsSourceTarget(graph: number[][]): number[][] {
    const n = graph.length - 1;
    const result: number[][] = [];
    const current: number[] = [0];
    function backtrack(node: number) {
        if (node === n) {
            result.push([...current]);
            return;
        }

        for (let next of graph[node]) {
            current.push(next);
            backtrack(next);
            current.pop();
        }
    }

    backtrack(0)

    return result;
};