function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^0-9a-z]/g, '');
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
};