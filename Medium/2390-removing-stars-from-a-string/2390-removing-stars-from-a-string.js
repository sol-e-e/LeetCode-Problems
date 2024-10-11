/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*') {
            result.push(s[i])
        }

        if (s[i] === '*' && result.length) {
            result.pop()
        }
    }

    return result.join('')
};