// Could you solve it without converting the integer to a string?
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    let origin = x;
    let reversed = 0;

    while (origin > 0) {
        const last = origin % 10;
        reversed = reversed * 10 + last;
        origin = Math.floor(origin / 10);
    }
    
    return x === reversed;
};