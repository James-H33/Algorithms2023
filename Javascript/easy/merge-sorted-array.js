/*
    Time: O(n)
    Space: O(n)
    Note: 
    URL: https://leetcode.com/problems/merge-sorted-array
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = [...nums1];
    let nums1Index = m - 1;
    let nums2Index = n - 1;
    let insertIndex = (m + n) - 1;

    while (insertIndex >= 0) {
        let n1 = nums1Copy[nums1Index] ?? -Infinity;
        let n2 = nums2[nums2Index] ?? -Infinity;
        let next = null;

        if (n1 < n2) {
            next = n2;
            nums2Index--;
        } else {
            next = n1;
            nums1Index--;
        }

        nums1[insertIndex] = next;
        insertIndex--;
    }


    return nums1;
};