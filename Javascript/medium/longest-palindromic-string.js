/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';

    if (s.length === 1) {
        return s;
    }

    longest = s.substring(0, 1);

    function odd(startIndex) {
        let prevIndex = startIndex - 1;
        let nextIndex = startIndex + 1;

        while (prevIndex >= 0 || nextIndex < s.length) {
            let prev = s[prevIndex];
            let next = s[nextIndex];

            if (!prev || !next || prev !== next) {
                break;
            } 

            longest = getLongest(longest, s.substring(prevIndex, nextIndex + 1));
            prevIndex--;
            nextIndex++;
        }
    }

    function even(index) {
        let prevIndex = index - 1;
        let nextIndex = index + 1;

        if (s[index] !== s[nextIndex]) {
            return;
        }

        longest = getLongest(longest, s.substring(index, nextIndex + 1));
        nextIndex++;

        while (prevIndex >= 0 || nextIndex < s.length) {
            let prev = s[prevIndex];
            let next = s[nextIndex];

            if (!prev || !next || prev !== next) {
                break;
            } 

            longest = getLongest(longest, s.substring(prevIndex, nextIndex + 1));
            prevIndex--;
            nextIndex++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        even(i);
        odd(i);
    }

    return longest;
};

function getLongest(s1, s2) {
    return s1.length < s2.length ? s2 : s1;
}