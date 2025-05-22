function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0;
                continue;
            }
            if (i > 0 && j > 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else if (j > 0) {
                obstacleGrid[i][j] = Math.min(obstacleGrid[i][j - 1], 1);
            } else if (i > 0) {
                obstacleGrid[i][j] = Math.min(obstacleGrid[i - 1][j], 1);
            } else {
                obstacleGrid[i][j] = 1;
            }
        }
    }

    return obstacleGrid[m - 1][n - 1];
};