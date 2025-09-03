function generateMatrix(n: number): number[][] {
    const result: number[][] = Array.from({length: n}, () => Array(n).fill(0));
    let row = 0, col = 0;
    
    for (let i = 1; i <= n * n; i++) {
        result[row][col] = i;
        if (result[row][col + 1] === 0 && (row === 0 || result[row - 1][col] !== 0)) {
            col++;
        } else if (result[row + 1] && result[row + 1][col] === 0) {
            row++;
        } else if (result[row][col - 1] === 0) {
            col--;
        } else if (result[row - 1] && result[row - 1][col] === 0) {
            row--;
        }
    }

    return result;
};