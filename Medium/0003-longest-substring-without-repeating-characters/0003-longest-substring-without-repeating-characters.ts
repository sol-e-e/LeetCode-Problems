function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length;

    let len = 0;
    let start = 0, end = 0;
    const chars = new Set<string>();

    while (end < s.length) {
        const cur = s[end];
        
        if (chars.has(cur)) {
            while (s[start] !== cur) {
                chars.delete(s[start]);
                start += 1;
            }
        } 
        
        chars.add(cur);

        len = Math.max(len, chars.size);
        end += 1;
    }

    return len;
};