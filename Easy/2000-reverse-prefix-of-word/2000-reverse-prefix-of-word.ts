function reversePrefix(word: string, ch: string): string {
    let index = word.indexOf(ch);

    return word.slice(0, index + 1).split("").reverse().join("").concat(word.slice(index + 1));
};