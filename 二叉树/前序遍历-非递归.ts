// 地址：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = []
  if(root === null) return result
  let stack: Array<TreeNode> = []
  stack.push(root)   // 根先入栈

  while(stack.length) {
    let node = stack.pop()
    node && result.push(node.val)
    if(node) {
      if(node.right) stack.push(node.right)
      if(node.left) stack.push(node.left)
    }
  }

  return result
};

function preorderTraversal2(root: TreeNode | null): number[] {
  let result: number[] = []
  if(root === null) return result
  let stack: Array<TreeNode> = []
  
  let p: any = root
  // 根节点先入结果集中，然后不断找左节点
  while(p || stack.length) {
    while(p){
      result.push(p.val)
      if(p.right) stack.push(p.right)
      p = p.left
    }
    p = stack.pop()
  }
  return result
};