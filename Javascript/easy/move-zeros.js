/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let currentIndex = 0;
    let lookAheadIndex = 0;
    let len = nums.length;

    while (lookAheadIndex < len && currentIndex < len) {
        let currNum = nums[currentIndex];

        if (currNum === 0) {
            lookAheadIndex = currentIndex;

            while (lookAheadIndex < len) {
                let lookAheadNum = nums[lookAheadIndex];

                if (lookAheadNum !== 0) {
                    nums[currentIndex] = lookAheadNum;
                    nums[lookAheadIndex] = 0;
                    break;
                } else {
                    lookAheadIndex++;
                }
            }
        } 
        
        currentIndex++;
    }

    return nums;
};