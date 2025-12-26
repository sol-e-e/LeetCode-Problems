function shortestPalindrome(s: string): string {
    if (s.length <= 1) return s;
    
    const base = 31;
    const mod = 1e9 + 7;
    let hash = 0;
    let reverseHash = 0;
    let basePow = 1; 
    let maxIndex = 0;

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        hash = (hash * base + code) % mod;
        reverseHash = (reverseHash + code * basePow) % mod;
        if (hash === reverseHash) maxIndex = i;
        basePow = (basePow * base) % mod;
    }
    return s.slice(maxIndex + 1).split('').reverse().join('') + s;
};
