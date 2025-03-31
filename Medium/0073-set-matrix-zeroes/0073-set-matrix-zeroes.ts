/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length, n = matrix[0].length;
    let rowHasZero = false, colHasZero = false;
    // mark at first row and first col
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 0) {
                if (row === 0) rowHasZero = true;
                if (col === 0) colHasZero = true;
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }
    // zero col 
    for (let col = 1; col < n; col++) {
        if (matrix[0][col] === 0) {
            for (let row = 1; row < m; row++) {
                matrix[row][col] = 0;
            }
        }
    }

    // zero row
    for (let row = 1; row < m; row++) {
        if (matrix[row][0] === 0) {
            matrix[row].fill(0)
        }
    }

    if (colHasZero) {
        for (let row = 0; row < m; row++) {
            matrix[row][0] = 0;
        }
    }

    if (rowHasZero) matrix[0].fill(0);
};