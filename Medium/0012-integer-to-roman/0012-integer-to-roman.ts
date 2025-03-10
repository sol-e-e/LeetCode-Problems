const syms: {[key: number]: string} = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
const five = 5;
function intToRoman(num: number): string {
    let answer: string[] = [];
    let digit = 1;

    while (num > 0) {
        let rest = num % 10;
        if (rest % five === 4) {
            answer.push(syms[digit] + syms[(rest + 1) * digit]);
        } else {
            answer.push(syms[digit].repeat(rest % five));
            if (Math.floor(rest / five) > 0) answer.push(syms[digit * five]);
        }
        digit *= 10;
        num = Math.floor(num / 10);
    }
    
    return answer.reverse().join('');
};