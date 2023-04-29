/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];
    let seen = {};
    
    backtrack([]);
    
    return output;
    
    function backtrack(arr) {
      if (arr.length === nums.length) {
        output.push(arr.slice());
      } else {
       for (let n of nums) {
         if (!seen[n]) {
          seen[n] = true;
          arr.push(n);
          backtrack(arr, seen);
          arr.pop(); 
          seen[n] = false;
         }
        }   
      }
    }
  };

  console.log(permute([1,2,3]));