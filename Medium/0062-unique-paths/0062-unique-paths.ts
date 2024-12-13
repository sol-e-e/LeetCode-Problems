function uniquePaths(m: number, n: number): number {
    let paths: number[][] = Array.from({ length: m }, () => Array.from({ length: n}, () => 0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) { 
                paths[i][j] = 1;
            } else {
                paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
            }
        }
    }
    return paths[m - 1][n - 1];
};