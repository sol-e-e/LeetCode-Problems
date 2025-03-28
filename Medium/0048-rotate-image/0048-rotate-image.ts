/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const len = matrix.length;
    for (let i = 0; i < len / 2; i++) {
        [matrix[i], matrix[len - 1 - i]] = [matrix[len - 1 - i], matrix[i]];
    }

    for (let i = 1; i < len; i++) {
        for (let j = 0; i < len; j++) {
            if (i === j) break;
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};