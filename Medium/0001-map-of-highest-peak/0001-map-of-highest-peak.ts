function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length, n = isWater[0].length;
    const result = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue: [number, number][] = [];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j]) {
                queue.push([i, j]);
                result[i][j] = 0;
            }
        }
    }

    let start = 0;
    while (start < queue.length) {
        const [x, y] = queue[start++];
        const height = result[x][y];

        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < m && ny < n && result[nx][ny] === -1) {
                result[nx][ny] = height + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return result;
};