/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const result = [];

    for (const str of s) {
        if (str === ']') {
            let content = '';
            let digit = '';
            while(result.length) {
                const popped = result.pop();
                if (popped === '[') break;
                content = popped + content;
            }
            while(result.length) {
                const popped = result.pop();
                if (isNaN(popped)) {
                    result.push(popped);
                    break;
                }
                digit = popped + digit;
            }
          
            result.push(content.repeat(Number(digit)))
        } else {
            result.push(str);
        }
    }

    return result.join('');
};