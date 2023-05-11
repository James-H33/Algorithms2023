/*
    Time: O(n)
    Space: O(n)
    Note: Use a hash map to keep track of previous numbers and their indices. 
    For each iteration, check if the difference between the target and the current number is in the hash map.
    URL: https://leetcode.com/problems/two-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;
        
        if (diff in map) {
            return [i, map[diff]];
        }

        map[n] = i;
    }
};