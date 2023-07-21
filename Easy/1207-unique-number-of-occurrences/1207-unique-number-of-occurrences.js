/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    const map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    return map.size === new Set(map.values()).size;
};