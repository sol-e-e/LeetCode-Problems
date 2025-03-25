function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length, n = matrix[0].length;
    const result = [];

    const isComplete = () => result.length === m * n;
    let left = 0, top = 0;
    let right = n - 1, bottom = m - 1;

    while (!isComplete()) {
        for (let i = left; i <= right; i++) {
            if (isComplete()) break;
            result.push(matrix[top][i]);
        }

        top += 1;

        for (let i = top; i <= bottom; i++) {
            if (isComplete()) break;
            result.push(matrix[i][right]);
        }

        right -= 1;

        for (let i = right; i >= left; i--) {
            if (isComplete()) break;
            result.push(matrix[bottom][i]);
        }

        bottom -= 1;

        for (let i = bottom; i >= top; i--) {
            if (isComplete()) break;
            result.push(matrix[i][left]);
        }

        left += 1;
    }

    return result;
};