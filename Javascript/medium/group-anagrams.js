/*
    Time: O(strings * outputGroups * averageWordLength)
    Space: O(n)
    Note: First solution. Not efficient.
    URL: https://leetcode.com/problems/group-anagrams/
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const output = [];
    const maps = {};

    for (let i = 0; i < strs.length; i++) {
        const currentStr = strs[i];
        
        if (output.length === 0) {
            const map = makeMap(currentStr)

            maps[0] = map;
            output.push([currentStr]);

            continue;
        }

        let groupIndex = 0;
        let foundMatch = false;

        while (groupIndex < output.length && !foundMatch) {
            let currentMap = maps[groupIndex];

            if (isAnagram(currentMap, currentStr)) {
                output[groupIndex].push(currentStr);
                foundMatch = true;
            } 

            groupIndex++;
        }

        if (!foundMatch) {
            maps[groupIndex] = makeMap(currentStr);
            output.push([currentStr]);
        }
    };

    return output;
};

function makeMap(str) {
    const map = {}

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    map['len'] = str.length;

    return map;
}

function isAnagram(map, t) {
    let resMap = {};

    if (map['len'] !== t.length) {
        return false;
    }

    for (let char of t) {
        if (char in map) {
            resMap[char] = (resMap[char] || 0) + 1;

            if (map[char] < resMap[char]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
};

/*
    Time: O(n log n)
    Space: O(n)
    Note: Iterate through each string of the array. Sort each string and check that string against a hashmap to see if that string group already exists. 
    If it does, add the string to the group. If it doesn't, create a new group and add the string to it. 
    URL: https://leetcode.com/problems/group-anagrams/
*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const resultMap = new Map();

    for (let s of strs) {
        const key = s.split('').sort().join('');

        if (resultMap.has(key)) {
            resultMap.get(key).push(s);
        } else {
            resultMap.set(key, [s]);
        }
    }

    return Array.from(resultMap.values())
};