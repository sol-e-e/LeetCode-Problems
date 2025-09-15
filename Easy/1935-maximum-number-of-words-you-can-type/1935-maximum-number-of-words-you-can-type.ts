function canBeTypedWords(text: string, brokenLetters: string): number {
    const broken = new Set(brokenLetters);
    let isBroken = false;
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        const l = text[i];
        if (broken.has(l)) isBroken = true;
        if (i === text.length - 1 || l === ' ') {
            if (!isBroken) count++;
            isBroken = false;
        }
    }

    return count;
};