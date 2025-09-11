function sortVowels(s: string): string {
    const set = new Set('AEIOUaeiou');
    const vowels = [];

    for (let l of s) {
        if (set.has(l)) {
            vowels.push(l);
        }
    }

    vowels.sort();

    const result = [];
    let i = 0;

    for (let l of s) {
        result.push(set.has(l) ? vowels[i++] : l)
    }

    return result.join('');
};