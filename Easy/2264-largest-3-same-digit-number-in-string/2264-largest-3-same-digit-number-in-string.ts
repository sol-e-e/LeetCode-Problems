function largestGoodInteger(num: string): string {
    for (let i = 9; i >= 0; i--) {
        if (num.includes(`${i}${i}${i}`)) {
            return `${i}${i}${i}`;
        }
    }

    return "";
};