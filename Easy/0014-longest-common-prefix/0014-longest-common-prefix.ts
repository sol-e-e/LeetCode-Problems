function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    strs.sort();

    const first = strs[0], last = strs[strs.length - 1];
    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            prefix += first[i];
        } else {
            break;
        }
    }
    return prefix;
};