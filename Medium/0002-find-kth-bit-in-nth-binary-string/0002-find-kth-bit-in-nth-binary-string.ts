function findKthBit(n: number, k: number): string {
    let invert = false;

    while (n > 1) {
        const len = (1 << n) - 1; // n^2 - 1;
        const mid = (len >> 1) + 1;

        if (k === mid) {
            return invert ? '0' : '1';
        } else if (k > mid) {
            k = len - k + 1;
            invert = !invert;
        }
        n--;
    }

    return invert ? '1' : '0';
};