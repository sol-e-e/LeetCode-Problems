function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
        const schar = s[i], tchar = t[i];
        map.set(schar, (map.get(schar) || 0) + 1);
        map.set(tchar, (map.get(tchar) || 0) - 1);

        if (map.get(schar) === 0) map.delete(schar);
        if (map.get(tchar) === 0) map.delete(tchar);
    }

    return map.size === 0;
};