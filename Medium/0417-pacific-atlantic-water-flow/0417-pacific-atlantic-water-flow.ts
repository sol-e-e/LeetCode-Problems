function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length, n = heights[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    const result: number[][] = [];

    function waterFlow(ocean: number[][]) {
        let visited = Array.from({ length: m }, () => Array(n).fill(false));
        let stack = [...ocean];

        while (stack.length) {
            const [r, c] = stack.pop();
            if (visited[r][c]) continue;
            visited[r][c] = true;
            for (let [dx, dy] of directions) {
                const x = r + dx, y = c + dy;
                if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y] && heights[x][y] >= heights[r][c]) stack.push([x, y]);
            }
        }

        return visited;
    }

    const pacific = [];
    for (let i = 0; i < m; i++) pacific.push([i, 0]);
    for (let j = 0; j < n; j++) pacific.push([0, j]);
    const atlantic = [];
    for (let i = 0; i < m; i++) atlantic.push([i, n - 1]);
    for (let j = 0; j < n; j++) atlantic.push([m - 1, j]);

    const pacificFlow = waterFlow(pacific);
    const atlanticFlow = waterFlow(atlantic);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificFlow[i][j] && atlanticFlow[i][j]) result.push([i, j])
        }
    }

    return result;
};