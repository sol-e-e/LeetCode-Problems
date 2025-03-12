function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();

    for (const str of strs) {
        if (str.length === 0) {
            map.set('empty', (map.get('empty') || []).concat(str));
        } else if (str.length === 1) {
            map.set(str, (map.get(str) || []).concat(str));
        } else {
            const sorted = str.split('').sort().join('');
            map.set(sorted, (map.get(sorted) || []).concat(str));
        }
    }

    return [...map.values()];
};