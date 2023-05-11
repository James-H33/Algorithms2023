/*
    Time: O(log n) or O(n) in a worst case scenario
    Space: O(1)
    Note: Since the array is sorted we can do binary search to find the target. Once we find the target we can expand left and right to find the range.
    In the average case we will have a O(log n) time complexity. In the worst case we will have a O(n) time complexity if the array is all the same number.
    URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
*/

const searchRange = function (nums, target) {

    function find() {
      let leftIndex = 0;
      let rightIndex = nums.length - 1;
  
      if (nums.length === 0) {
        return -1;
      }
  
      if (nums.length < 2) {
        return nums[0] === target ? 0 : -1;
      }
  
      while (leftIndex <= rightIndex) {
        let i = Math.floor((leftIndex + rightIndex) / 2);
        let num = nums[i];
  
        if (num === target) {
          return i;
        }
  
        if (num < target) {
          leftIndex = i + 1;
        } else {
          rightIndex = i - 1;
        }
      }
  
      return -1;
    }
  
    let start = find();
  
    if (start === -1) {
      return [-1, -1];
    }
  
    let left = start;
    let right = start;
  
  
    while (left >= 0) {
      if (nums[left] === target) {
        left--;
      } else {
        break;
      }
    }
  
    while (right < nums.length) {
      if (nums[right] === target) {
        right++;
      } else {
        break;
      }
    }
  
  
    return [left + 1, right - 1];
  };