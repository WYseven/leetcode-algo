/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

 // 利用双指针，开始小于等于结束，不断累积，大于等于 7 的话，满足条件时，左指针向右移动一位
 // 停止条件是 左指针 <= 右指针

var minSubArrayLen = function(s, nums) {
  if(nums.length === 0) return 0

  let start = 0, end = 0, min = Infinity, result = 0, len = nums.length;

  while(end <= len) {
    result += nums[end]
    while(result >= s) {
      min = Math.min(min, end - start + 1)
      result -= nums[start]
      start++;
    }
    end++
  }
  return min === Infinity ? 0 : min
};


console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(15, [1,2,3,4,5]))