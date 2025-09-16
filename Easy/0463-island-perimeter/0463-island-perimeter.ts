function islandPerimeter(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let perimeter = 0;

    function connected(row: number, col: number) {
        if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 0) return false;
        if (grid[row][col] === -1) return true;
        perimeter += 4;
        grid[row][col] = -1;

        for (let [x, y] of directions) {
            if (connected(row + x, col + y)) {
                perimeter -= 1;
            }
        }

        return true;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                connected(i, j)
                break;
            }
        }
    }

    return perimeter
};