/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const result = guess(mid);
        if (result === 0) return mid;
        if (result === 1) low = mid + 1;
        if (result === -1) high = mid - 1;
    }
};