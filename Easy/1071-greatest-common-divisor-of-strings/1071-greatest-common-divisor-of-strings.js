/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let result = "";
    const [len1, len2] = [str1.length, str2.length];
    let len = Math.min(len1, len2);
    for (let i = len; i > 0; i--) {
        if (len1 % i !== 0 || len2 % i !== 0) continue;
        const [n1, n2] = [len1 / i, len2 / i];
        const base = str1.slice(0, i);
        if (str1 === base.repeat(n1) && str2 === base.repeat(n2)) return base;
       
    }
    return "";
};