/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let result = 0;
    const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    
    for (let i = 0; i < k; i++) {
        if (vowel.has(s[i])) {
            count++;
        }
    }
    
    result = count;
    
    for (let i = k; i < s.length; i++) {
        if (vowel.has(s[i - k])) count--;
        if (vowel.has(s[i])) count++;
        result = Math.max(result, count);
    }
    
    return result;
};