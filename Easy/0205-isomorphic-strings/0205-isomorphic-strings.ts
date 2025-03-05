function isIsomorphic(s: string, t: string): boolean {
    const smap: Map<string, string> = new Map();
    const tmap: Map<string, string> = new Map();
    for (let i = 0; i < s.length; i++) {
        const schar = s[i], tchar = t[i];
        if (smap.has(schar) && smap.get(schar) !== tchar) return false;
        if (tmap.has(tchar) && tmap.get(tchar) !== schar) return false;
        smap.set(schar, tchar);
        tmap.set(tchar, schar);
    }
    return true;
};