/*
    Time: O(n)
    Space: O(1)
    Note: Since the max potential sum is known based on the given constraints, 
    we can calculate the sum of the given array and subtract it from the max potential sum.
    URL: https://leetcode.com/problems/missing-number
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let potentialSum = nums.length;

    for (let i = 0; i < nums.length; i++) {
        potentialSum += i;
        sum += nums[i];
    }
    
    return potentialSum - sum;
};