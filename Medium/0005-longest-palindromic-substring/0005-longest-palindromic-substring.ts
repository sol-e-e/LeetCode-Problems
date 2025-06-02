function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;
    let longest = s.substring(0, 1);

    for (let i = 0; i < s.length; i++) {
        [expand(s, i, i), expand(s, i, i + 1)].forEach((longger) => {
            if (longger.length > longest.length) {
                longest = longger;
            }
        })
    }

    return longest;
};

function expand(s: string, start:number, end: number): string {
    while(start >= 0 && end <= s.length - 1 && s[start] === s[end]) {
        start--;
        end++;
    }

    return s.substring(start + 1, end);
}