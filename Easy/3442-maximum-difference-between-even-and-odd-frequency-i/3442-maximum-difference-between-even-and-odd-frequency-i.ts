function maxDifference(s: string): number {
    const freq = Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let odd = 0;
    let even = Number.MAX_SAFE_INTEGER;

    for (const n of freq) {
        if (n % 2 === 1) {
            odd = Math.max(odd, n);
        } else if (n !== 0) {
            even = Math.min(even, n);
        }
    }

    return even === Number.MAX_SAFE_INTEGER ? odd : odd - even;
};