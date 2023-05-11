/*
    Time: O(n)
    Space: O(n)
    Note: Use hashmap to keep track of the frequency of each number in the array. Create an array of arrays of length nums + 1; this will be used 
    to store the numbers in the array based on their frequency. Iterate through the hashmap and push the number into the array at the index that matches
    the frequency of the number. Iterate through the array of arrays in reverse order and push the numbers into the output array until the output array is
    of length k. Return the output array.
    URL: https://leetcode.com/problems/top-k-frequent-elements
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const countMap = new Map();

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1); 
    }

    const freqArr = Array(nums.length + 1).fill(null).map(() => []);

    for (let key of countMap.keys()) {
        const numCount = countMap.get(key);
        freqArr[numCount].push(key);
    }

    const output = [];

    for (let i = freqArr.length - 1; i >= 0 ; i--) {
        const freqValues = freqArr[i];

        for (let val of freqValues) {
            output.push(val);

            if (output.length === k) {
                return output;
            }
        }
    }

    return output;
};