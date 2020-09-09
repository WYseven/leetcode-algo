// 地址：https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   if(nums.length <= 1) return []
//   for(let i = 0; i < nums.length - 1; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if(target - nums[i] === nums[j]) {
//         return [i,j]
//       }
//     }
//   }

//   return []

// };


var twoSum = function(nums, target) {
  if(nums.length <= 1) return []
  let map = {}
  for(let i = 0; i < nums.length; i++){
    let key = target - nums[i]  // 作为key值，剩下需要的值
    console.log(map, key)
    if(key in map) {
      return [map[key], i]
    }
    map[nums[i]] = i
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 7, 11, 15], 13))

