
// 遇到有序数组中搜索值的问题，可以用二分查找，或者双指针
// 如果中间数和索引相同，则说明左侧是排好序的，把左指针移动到 m + 1的位置
// 最后 i 的值就是缺少的数
// i 为 左数组的首位
// j 为 右数组的末尾
// 当 i <= j  不成立时，说明 i 已经大于 j 了， 返回 i 即可

function missingNumber(nums: number[]): number {
  if(nums.length === 0) return -1
  let i = 0, j = nums.length - 1;
  while(i <= j) {
    let m = Math.ceil((i + j) / 2)
    if(nums[m] === m) i = m + 1
    else j = m - 1
  }

  return i
};

console.log(missingNumber([0,1,3]));
console.log(missingNumber([0,1,2,3,4,5,6,7,9]));
console.log(missingNumber([0, 1, 3, 4, 5]));