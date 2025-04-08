function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length - 1, n = matrix[0].length - 1;
    let top = 0, bottom = m;
    let left = 0, right = n;

    while (top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);
        if (matrix[mid][right] < target) {
            top = mid + 1;
        } else {
            bottom = mid - 1;
        }
    }

    if (top > m) return false;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[top][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left > n) return false;

    return matrix[top][left] === target;
};