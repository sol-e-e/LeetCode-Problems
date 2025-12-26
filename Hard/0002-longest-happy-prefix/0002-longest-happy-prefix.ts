function longestPrefix(s: string): string {
    const base = 31;
    const mod = 1e9 + 7;
    const n = s.length;
    
    let prefixHash = 0;
    let suffixHash = 0;
    let basePow = 1;
    let answer = '';

    for (let i = 0; i < n - 1; i++) {
        prefixHash = (prefixHash * base + s.charCodeAt(i)) % mod;
        suffixHash = (suffixHash + basePow * s.charCodeAt(n - 1 - i)) % mod;
        if (prefixHash === suffixHash) {
            answer = s.substring(0, i + 1);
        }
        basePow = (basePow * base) % mod;
    }

    return answer;
};