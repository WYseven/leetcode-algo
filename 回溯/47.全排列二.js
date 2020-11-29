/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// nums 中包含重复的项
var permute = function(nums) {

  let result = []  // 存放总结果
  let vis = [] // 存放重复的已经填过的数字的标识, [true,true,false] 这样

  var loop = (nums, inx, child) => {

    if(inx === nums.length) {
      result.push([...child])
      return
    }
    
    for(let i = 0; i < nums.length; i++){

      if(vis[i]) continue  // 已经存在
      // 跳过之前已经排列过的重复项
      if( i > 0 && nums[i] === nums[i - 1] && !vis[i - 1] ){
        continue
      }

      vis[i] = true
      child.push(nums[i])
      loop(nums, inx + 1, child)
      child.pop();
      vis[i] = false

    }
  
  }
  // 先排序，保证重复的数字挨着
  nums = nums.sort((a, b) => a - b)
  loop(nums, 0, [])
  return result
};


console.log(permute([1,2,3]))
console.log(permute([1,1,1, 3]))
