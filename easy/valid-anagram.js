/*
    Time: O(n)
    Space: O(n)
    Note: Use a hash map to keep track of the number of times each character appears in first string. Then 
    iterate through the second string and decrement the count of each character in the hash map. If character is not in hashmap return false or if the count
    in hash map is less than 0, return false. 
    URL: https://leetcode.com/problems/two-sum/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (t.length !== s.length) {
        return false;
    }

    const map = {}

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {
        if (char in map) {
            map[char]--;

            if (map[char] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
};