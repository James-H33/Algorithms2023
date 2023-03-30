/*
    Time: O(n)
    Space: O(n)
    Note: Use hashmap to keep track of the frequency of each number in the array. Create an array of arrays of length nums + 1; this will be used 
    to store the numbers in the array based on their frequency. Iterate through the hashmap and push the number into the array at the index that matches
    the frequency of the number. Iterate through the array of arrays in reverse order and push the numbers into the output array until the output array is
    of length k. Return the output array.
    URL: https://leetcode.com/problems/longest-common-prefix/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(words) {

    if (!words.length || !words[0].length) {
      return '';
    }
  
    let longestCommonPrefix = '';
    let firstWord = words.at(0)
    let currChar = firstWord.at(0)
    let shortestWordLen = firstWord.length;
    let charIndex = 0;
    let start = 0;
    let end = words.length;
  
    while (start < end) {
      let word = words[start];
      shortestWordLen = Math.min(word.length, shortestWordLen);
  
      if (word[charIndex] !== currChar) {
        return longestCommonPrefix;
      }
  
      start++
      
      if (start >= end && currChar) {
        longestCommonPrefix += currChar;
        charIndex++;
        currChar = firstWord[charIndex];
        start = 0;
      }
    }
  
    return longestCommonPrefix;
  };