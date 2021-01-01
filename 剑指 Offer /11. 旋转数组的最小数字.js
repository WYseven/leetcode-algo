/**
 * @param {number[]} numbers
 * @return {number}
 */

// 思路，从后先前搜索，当前的值小于前一个时，返回当前值；循环结束，没找到，就是第一个元素了。
// 最差的情况是从后向前搜索一遍元素，时间复杂度为 O(n)。 

var minArray = function(numbers) {

  let len = numbers.length;

  if(numbers[0] < numbers[len - 1])  return numbers[0] 

  for(let i = len - 1; i > 0; i--){
    if(numbers[i] < numbers[i-1]){
      return numbers[i]
    }
  }
  return numbers[0]
};

// 二分查找

var minArray = function(numbers) {

  if(numbers.length === 1) return numbers[0]

  let len = numbers.length;

  // 确定是已排序好的，如果最后一个数大于第一个，就是排好的

  if(numbers[0] < numbers[len - 1])  return numbers[0] 
  
  let leftPoint = 0, rightPoint = len - 1;

  while(leftPoint < rightPoint) {
    // 找到中间值
    let mid = (leftPoint + rightPoint) >>> 1
    if(numbers[mid] > numbers[rightPoint]){  // 需要在 [mid+ 1, right] 区间内继续找
      leftPoint = mid + 1
    } else if(numbers[mid] < numbers[rightPoint]){  // [left, mid] 区间内找
      rightPoint = mid
    } else {  // 相同，就把右侧抛弃掉
      rightPoint--
    } 
  }
  return numbers[leftPoint]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(nums.length === 1) return nums[0]

  let len = nums.length;

  // 确定是已排序好的，如果最后一个数大于第一个，就是排好的

  if(nums[0] < nums[len - 1])  return nums[0] 
  
  let left = 0, right = len - 1;

  while(left < right) {
    // 找到中间值
    let mid = (left + right) >>> 1
    if(nums[mid] > nums[right]){  // 需要在 [mid+ 1, right] 区间内继续找
      left = mid + 1
    } else if(nums[mid] < nums[right]){  // [left, mid] 区间内找
      right = mid
    } else {  // 相同，就把右侧抛弃掉
      right--
    } 
  }
  return nums[left]
};

// console.log(minArray([3,4,5,1,2]));
// console.log(minArray([2,2,2,0,1]));
// console.log(minArray([1,3,5]));

console.log(findMin([3,4,5,1,2]));
console.log(findMin([2,2,2,0,1]));
console.log(findMin([1,3,5]));