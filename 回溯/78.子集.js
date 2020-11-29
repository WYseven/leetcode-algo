/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

  const result = []
  // 开始循环的位置，和当前的集合
  const loop = (start, subset) => {
    for(let i = start; i < nums.length; i++){
      subset.push(nums[i])
      result.push([...subset])
      loop(i + 1, subset)
      subset.pop()
    }

  }

  loop(0, [])
  result.push([])
  return result
};



console.log(subsets([1,2,3]))