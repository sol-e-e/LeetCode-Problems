function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: Map<string, number> = new Map();

    for (let i = 0; i < magazine.length; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];
        if (!map.has(letter)) return false;
        map.set(letter, map.get(letter) - 1);
        if (map.get(letter) === 0) map.delete(letter);
    }

    return true;
};