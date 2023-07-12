/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let spoint = 0;
    let tpoint = 0;
    while (tpoint < t.length) {
        if (s[spoint] === t[tpoint]) {
            spoint++;
        }
        tpoint++;
    }
    return spoint === s.length
};