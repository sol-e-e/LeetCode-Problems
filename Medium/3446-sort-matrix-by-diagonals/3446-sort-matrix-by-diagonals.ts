function sortMatrix(grid: number[][]): number[][] {
    const m = grid.length, n = grid[0].length;
    const diag: Record<string, number[]> = {};

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let key = (i - j).toString();
            if (!diag[key]) diag[key] = [];
            diag[key].push(grid[i][j]);
        }
    }

    for (const key in diag) {
        const d = parseInt(key);
        if (d < 0) diag[key].sort((a, b) => a - b);
        else diag[key].sort((a, b) => b - a);
    }

    const idx: Record<string, number> = {};

    for (const key in diag) {
        idx[key] = 0;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const key = (i - j).toString();
            grid[i][j] = diag[key][idx[key]++];
        }
    }
    
    return grid;
};