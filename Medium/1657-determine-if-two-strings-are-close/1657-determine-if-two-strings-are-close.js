/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
        map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
    }
    
    if ([...map1.keys()].sort().join('') !== [...map2.keys()].sort().join('')) {
        return false;
    }
 
    if ([...map1.values()].sort().join('') !== [...map2.values()].sort().join('')) {
        return false;
    }
    
    return true;
};