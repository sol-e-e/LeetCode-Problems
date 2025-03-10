function strStr(haystack: string, needle: string): number {
    if (needle.length > haystack.length) return -1;

    let loc = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[loc]) {
            loc++;
            if (loc === needle.length) {
                return i - loc + 1;
            }
        } else {
            i -= loc;
            loc = 0;
        }
    }

    return -1;
};