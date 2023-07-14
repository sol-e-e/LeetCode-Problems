/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
    let prev = 0;
    let highest = 0;
    gain.forEach(g => {
        prev += g;
        if (prev > highest) highest = prev;
    })
    return highest;
};