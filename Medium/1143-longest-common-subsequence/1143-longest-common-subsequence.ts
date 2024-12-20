function longestCommonSubsequence(text1: string, text2: string): number {
    const l1 = text1.length, l2 = text2.length;
    let dp = Array.from({ length: l1 + 1 }, () => Array.from({ length: l2 + 1 }, () => 0));
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[l1][l2];
};