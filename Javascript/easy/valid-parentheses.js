/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let queue = []; 

    for (let i = 0;  i < s.length; i++) {
        let char = s[i];

        if (char in bracketMap) {
            queue.push(char);
            continue;
        }

        if (!queue.length) {
            return false;
        }

        const lastBracket = queue.pop();

        if (bracketMap[lastBracket] !== char) {
            return false;
        }
    }

    return queue.length === 0;
};