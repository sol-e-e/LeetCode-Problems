/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = s.length - 1;
    let result = [...s];
    while (left < right) {
        if (!vowels.has(result[left])) {
            left++;
        }
        if (!vowels.has(result[right])) {
            right--;
        }
        if (vowels.has(result[left]) && vowels.has(result[right])) {
            [result[left], result[right]] = [result[right], result[left]];
            left++;
            right--;
        }
    }

    return result.join('');
};