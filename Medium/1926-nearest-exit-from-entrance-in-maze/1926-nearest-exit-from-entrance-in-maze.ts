function nearestExit(maze: string[][], entrance: number[]): number {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let steps = Infinity;
    const cells = [[...entrance, 0]];

    while (cells.length) {
        const [cx, cy, cd] = cells.shift();
        if (maze[cx][cy] === '+') continue;
        maze[cx][cy] = '+';

        for (const [x, y] of directions) {
            const nx = cx + x;
            const ny = cy + y;

            if (nx < 0 || ny < 0 || nx >= maze.length || ny >= maze[0].length) continue;
            if (maze[nx][ny] === '+') continue;

            if (nx === 0 || ny === 0 || nx === maze.length - 1 || ny === maze[0].length - 1) {
                steps = Math.min(steps, cd + 1);
            }

            cells.unshift([nx, ny, cd + 1]);
        }
    }

    return steps === Infinity ? -1 : steps;
};