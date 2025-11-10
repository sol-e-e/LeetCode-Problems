function maxFreqSum(s: string): number {
    let freq = {};
    let con = 0, vow = 0;

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch in freq) {
        if ('aeiou'.includes(ch)) {
            vow = Math.max(vow, freq[ch]);
        } else {
            con = Math.max(con, freq[ch]);
        }
    }

    return con + vow;
};