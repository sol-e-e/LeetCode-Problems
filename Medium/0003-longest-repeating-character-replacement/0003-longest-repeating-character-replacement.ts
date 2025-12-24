function characterReplacement(s: string, k: number): number {
    let left = 0;
    let maxCount = 0;
    const freq = new Map<string, number>();
    
    for (let right = 0; right < s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);

        maxCount = Math.max(maxCount, freq.get(s[right]));

        while (right - left + 1 - maxCount > k) {
            freq.set(s[left], freq.get(s[left])! - 1);
            left++;
        }
    }

    return s.length - left;
};