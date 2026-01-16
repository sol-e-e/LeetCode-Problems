function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];
    const current: string[] = [];

    function isValid(segment: string): boolean {
        if (+segment > 255) return false;
        if (segment.length > 1 && segment[0] === '0') return false;
        return true;
    }

    function backtracking(start: number) {
        if ((4 - current.length) * 3 < s.length - start) return; 
        if (s.length - start < 4 - current.length) return;

        if (current.length === 4) {
            if (start === s.length) {
                result.push(current.join('.'));
            }
            return;
        }

        for (let i = 1; i <= Math.min(3, s.length - start); i++) {
            const segment = s.slice(start, start + i);
            if (isValid(segment)) {
                current.push(segment);
                backtracking(start + i);
                current.pop();
            }
        }
    }

    backtracking(0);

    return result;
};