/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

 1
 2

var flatten = function(root) {
  if(root === null) return root 
  if(root.left === null) return null 
  if(root.right === null) return null 

  // 先深度遍历到底层
  flatten(root.left)
  flatten(root.right)

  // 把左右子树存起来
  const left = root.left
  const right = root.right

  // 把节点的左子树，作为右子树
  root.left = null 
  root.right = left

  // 把原来的又子树节点，挂在现在右子树末尾一个
  let p = root
  while(p.right){
    p = p.right
  }

  p.right = right

  return root
};