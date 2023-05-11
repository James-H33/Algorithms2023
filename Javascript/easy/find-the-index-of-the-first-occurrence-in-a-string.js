/*
    Time: O(n)
    Space: O(1)
    Note: Iterate through the haystack string and compare the first character of the needle string to the current character in the haystack string.
    If they are equal, iterate through the haystack string and the needle string at the same time. If the characters are not equal, 
    break out of the loop and continue iterating through the haystack string. 
    If the needle string is found, return the index of the first character in the haystack string. If the needle string is not found, return -1.
    URL: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let char = haystack[i];

        if (char === needle.at(0)) {
            let end = i;
            let needleCharIndex = 0;

            while (end < haystack.length) {
                let movingChar = haystack.at(end);

                if (movingChar !== needle.at(needleCharIndex)) {
                    break;
                }
                                
                if (needleCharIndex === needle.length - 1) {
                    return i;
                }

                needleCharIndex++;
                end++;
            }
        }
    }

    return -1;  
};