function gcdOfStrings(str1: string, str2: string): string {
    if (str1[0] !== str2[0]) return '';

    const len1 = str1.length, len2 = str2.length;
    const lenGCD = gcd(len1, len2);
    
    for (let i = lenGCD; i > 0; i--) {
        if (lenGCD % i === 0) {
            const prefix = str1.slice(0, i);
            if (prefix.repeat(len1 / i) === str1 && prefix.repeat(len2 / i) === str2) return prefix;
        }
    }


    return '';
};

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}