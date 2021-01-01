/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
//   if(nums.length === 0) return 0

//   // hash 映射
//   let map = {}
//   for(let i = 0; i < nums.length; i++){
//     if(map[nums[i]]){
//       return nums[i]
//     }

//     map[nums[i]] = 1;
//   }
  
  
//   return 0
// };

var findRepeatNumber = function(nums) {
  if(nums.length === 0) return 0

  // 0 - n-1 个数，说明下标和存入的数在不重复的情况下应该是一一对应关系
  // 那
  
  for(let i = 0; i < nums.length; i++){
   
    
  }
  
  
  return 0
};


console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));