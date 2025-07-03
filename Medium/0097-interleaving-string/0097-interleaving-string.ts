function isInterleave(s1: string, s2: string, s3: string): boolean {
    let m = s1.length, n = s2.length, l = s3.length;
    if (m + n !== l) return false;

    // b d d c a

    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let j = 1; j <= n; j++) {
        dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
    }

    for (let i = 1; i <= m; i++) {
        dp[0] = (dp[0] && s1[i - 1] === s3[i - 1]);
        for (let j = 1; j <= n; j++) {
            dp[j] = (dp[j - 1] && s2[j - 1] === s3[i + j - 1]) || (dp[j] && s1[i - 1] === s3[i + j - 1]);
        }
    }

    return dp[n];
};