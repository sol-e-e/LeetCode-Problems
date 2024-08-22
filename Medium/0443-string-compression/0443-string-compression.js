/**
 * @param {character[]} chars
 * @return number;
 */
var compress = function(chars) {
    let start = 0;
    let end = 0;
    let s = '';
    
    while(end < chars.length) {
        if (start === end) {
            s += chars[start]
        }
        
        if (chars[start] !== chars[end]) {
            if (end - start > 1) {
                s += end - start;
            }
            start = end;
            continue;
        }
        
        end += 1;
    }
    
    if (end - start > 1) {
        s += end - start;
    }

    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }

    return s.length;
};