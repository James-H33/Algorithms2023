/*
    Time: O(n) - n is the number of rows in the triangle
    Space: O(n) - n is the number of rows in the triangle in the output array.
    Note: 
    URL: https://leetcode.com/problems/pascals-triangle/
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(rowsCount) {
    let output = [[1], [1, 1]];

    if (rowsCount <= 2) {
        return output.slice(0, rowsCount);
    }

    function makeRow(count) {
        let result = [];
        let prevRowIndex = count - 1;
        let prevRow = output[prevRowIndex];

        for (let i = 0; i < count + 1; i++) {
            let prev1 = prevRow[i - 1] || 0;
            let prev2 = prevRow[i] || 0;
            result.push(prev1 + prev2);
        }

        return result;
    }

    let rowCount = 2;

    while (rowCount < rowsCount) {
        output.push(makeRow(rowCount));
        rowCount++;
    }

    return output;
};