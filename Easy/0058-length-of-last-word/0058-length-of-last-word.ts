function lengthOfLastWord(s: string): number {
    let count = 0;
    s = s.trimEnd();

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        count++;
    }

    return count;
};