function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let rows = new Array(numRows).fill('');
    let row = 1;
    let increasing: boolean = true;

    for (let i = 0; i < s.length; i++) {
        rows[row - 1] += s[i];
        row += increasing ? +1 : -1;
        if (row === 1 || row === numRows) increasing = !increasing;
    }

    return rows.join('');
};