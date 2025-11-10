function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) return '0';
    let answer = '';
    if (Math.sign(numerator) !== Math.sign(denominator)) answer += '-';

    let num = Math.abs(numerator);
    let den = Math.abs(denominator);
    answer += Math.floor(num / den);
    num %= den;
    if (num === 0) return answer;

    answer += '.';
    const map = new Map<number, number>();

    while (num > 0) {
        if (map.has(num)) {
            const idx = map.get(num);
            return answer.slice(0, idx) + '(' + answer.slice(idx) + ')';
        }

        map.set(num, answer.length);
        num *= 10;
        answer += Math.floor(num / den);
        num %= den;
    }

    return answer;
};