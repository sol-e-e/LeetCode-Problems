function orangesRotting(grid: number[][]): number {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let minute = 0;
    let fresh = 0;
    let queue = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i, j, 0]);
        }
    }

    while (queue.length) {
        const [cx, cy, cm] = queue.shift();

        for (const [x, y] of directions) {
            const nx = cx + x;
            const ny = cy + y;

            if (grid[nx]?.[ny] === undefined || grid[nx]?.[ny] === 0 || grid[nx]?.[ny] === 2) continue;

            queue.push([nx, ny, cm + 1]);
            grid[nx][ny] = 2;

            fresh--;

            if (fresh === 0) {
                return cm + 1;
            }
        }

    }

    return fresh ? -1 : 0;
};