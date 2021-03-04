/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

  if(nums.length === 0) return null

  const f = (firstIndex, lastIndex) => {

    if(firstIndex > lastIndex) return null

    // 从数组中找到最大值
    let max = -Infinity,
    index = -1  // 存最大值下标
    for(let i = firstIndex; i <= lastIndex; i++){
      if(nums[i] > max) {
        max = nums[i]
        index = i
      }
    }
    let node = new TreeNode(max)

    node.left = constructMaximumBinaryTree(nums, firstIndex, index - 1)
    node.right = constructMaximumBinaryTree(nums, index + 1, lastIndex)
    return node
  }
  return f(nums, 0, nums.length - 1)
};