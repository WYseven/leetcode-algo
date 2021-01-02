/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双指针
var twoSum = function(numbers, target) {

  if(numbers.length <= 1) return []

  let left = 0, right = numbers.length - 1;

  // 找到中间的数字
  while(left < right) {
    let sum = numbers[left] + numbers[right]

    if(sum === target) {
      return [left + 1, right + 1]
    }else if(sum > target){  // 右侧指针向左移动
      right--
    } else if(sum < target){  // 左侧指针向右移动
      left++
    } 
  }
  return []
};

// 二分查找 + 双指针

var twoSum = function(numbers, target) {

  if(numbers.length <= 1) return []

  let left = 0, right = numbers.length - 1;

  // 找到中间的数字
  while(left < right) {
    let mid = (left + right) >>> 1;

    if(numbers[left] + numbers[mid] > target) {
      right = mid - 1
    }else if(numbers[right] + numbers[mid] < target){  // 右侧指针向左移动
      left = mid + 1
    } else if(numbers[left] + numbers[right] > target){  // 左侧指针向右移动
      right--
    } else if(numbers[left] + numbers[right] < target){  // 左侧指针向右移动
      left++
    }else {
      return [left + 1, right + 1]
    }
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 2, 7, 11, 15], 9));