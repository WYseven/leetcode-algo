/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 0) return 0
  if(nums.length === 1) return nums[0]

  let pre = nums[0]  // 初始值
  let max = nums[0]   // 要求最大值，先定义最小值

  for(let i = 1; i < nums.length; i++){
    pre = Math.max(pre, pre + nums[i])
    max = Math.max(max, pre)
  }

  return max

};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));