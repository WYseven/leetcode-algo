/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(nums.length === 0) return -1

  let left = 0, right = nums.length - 1;  // 区间值
  let mid = null
  while(left <= right) {
    mid = Math.floor((left + j) / 2)  // 找到维护的区间中间的值
    if(nums[mid] === target) {  // 中间值，和目标值一致，直接返回
      return mid
    }else if(target < nums[mid]){  // 存在于左区间，则右区间索引到 mid - 1 上
      right = mid - 1
    }else if(target > nums[mid]){  // 存在于右区间，则做区间索引 mid + 1 上
      left = mid + 1
    }
  }

  return -1
};


console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))