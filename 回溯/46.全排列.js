/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  let result = []  // 存放总结果
  let child = [] // 存放每组遍历的字结果

  var loop = (nums) => {
    if(child.length === nums.length) {
      result.push([...child])
      return 
    }
    for(let i = 0; i < nums.length; i++){
      if(child.includes(nums[i])) continue
      child.push(nums[i])
      loop(nums)
      child.pop()
    }
    
  }
  loop(nums)
  return result
};


console.log(permute([1,2,3]))
