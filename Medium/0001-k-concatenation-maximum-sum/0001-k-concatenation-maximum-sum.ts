function kConcatenationMaxSum(arr: number[], k: number): number {
    if (Math.max(...arr) <= 0) return 0;
    const modulo = 10 ** 9 + 7;
    const n = arr.length;
    const totalSum = arr.reduce((a, b) => a + b, 0);
    let dp = Array.from({ length: 3 }, () => [...arr]);

    for (let i = 1; i < n; i++) {
        dp[0][i] = (dp[0][i] + Math.max(0, dp[0][i - 1])) % modulo;
        dp[1][i] = (dp[1][i] + dp[1][i - 1]) % modulo;
        dp[2][n - 1 - i] = (dp[2][n - 1 - i] + dp[2][n - i]) % modulo;
    }
    
    const kadane = Math.max(...dp[0]);
    if (k === 1) return kadane % modulo;

    if (totalSum > 0) {
        return (Math.max(...dp[1]) + (totalSum % modulo) * (k - 2) % modulo + Math.max(...dp[2])) % modulo;
    } else {
        const subSum = (Math.max(...dp[1]) + Math.max(...dp[2])) % modulo;
        return Math.max(kadane, subSum);
    }
};