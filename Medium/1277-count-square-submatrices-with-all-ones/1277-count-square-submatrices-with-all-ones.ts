function countSquares(matrix: number[][]): number {
    const m = matrix.length, n = matrix[0].length;
    let dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    let answer: number = 0;

    for (let i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0];
        answer += dp[i][0];
    }

    for (let j = 1; j < n; j++) {
        dp[0][j] = matrix[0][j];
        answer += dp[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]);
            }
            answer += dp[i][j];
        }
    }

    return answer;
};