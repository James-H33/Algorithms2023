/*
    Time: O(n)
    Space: O(1)
    Note: Add one to the first value in the iteration and carry over any remainder for the next iteration.
    URL: https://leetcode.com/problems/plus-one/
*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let remainder = 0

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        let isFirst = i === digits.length - 1;

        if (isFirst) {
            digit++;
        }

        digit = digit + remainder;

        if (digit >= 10) {
            digit = 0;
            remainder = 1;
        } else {
            remainder = 0;
        }

        digits[i] = digit;
    }

    if (remainder) {
        return [remainder, ...digits]
    }

    return digits;
};