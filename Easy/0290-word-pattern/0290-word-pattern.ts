function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    
    if (words.length !== pattern.length) return false;

    const map : Map<string, string> = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i], word = words[i];
        if (map.has(letter) && map.get(letter) !== word) return false;
        map.set(letter, word);
    }

    return true;
};