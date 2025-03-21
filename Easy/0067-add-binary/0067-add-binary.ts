function addBinary(a: string, b: string): string {
    let result: string = '';
    let ap = a.length - 1;
    let bp = b.length - 1;
    let carryOver = 0;

    while (ap >= 0 || bp >= 0) {
        let thisA = 0;
        let thisB = 0;

        if (ap >= 0) thisA = Number(a[ap]);
        if (bp >= 0) thisB = Number(b[bp]);

        let sum = thisA + thisB + carryOver;

        if (sum === 0) {
            result = '0' + result;
            carryOver = 0;
        } else if (sum === 1) {
            result = '1' + result;
            carryOver = 0;
        } else if (sum === 2) {
            result = '0' + result;
            carryOver = 1;
        } else {
            result = '1' + result;
            carryOver = 1;
        }

        ap--;
        bp--;
    }

    if (carryOver) result = '1' + result;

    return result;    
};