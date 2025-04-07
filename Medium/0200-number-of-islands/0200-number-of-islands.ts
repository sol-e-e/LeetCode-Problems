function numIslands(grid: string[][]): number {
    const visited = new Set<string>();
    const m = grid.length, n = grid[0].length;
    let count = 0;

    function bfs(row: number, col: number) {
        if (row < 0 || col < 0 || row >= m || col >= n) return;
        if (visited.has(`${row}-${col}`) || grid[row][col] === '0') return;

        visited.add(`${row}-${col}`);

        bfs(row + 1, col);
        bfs(row - 1, col);
        bfs(row, col + 1);
        bfs(row, col - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited.has(`${i}-${j}`) || grid[i][j] === '0') continue;
            bfs(i, j);
            count += 1;
        }
    }

    return count;
};