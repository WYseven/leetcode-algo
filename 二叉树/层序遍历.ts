// 102. 二叉树的层序遍历 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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

function levelOrder(root: TreeNode | null): number[][] {
  if(root === null) return []
  let result: any = []  // 结果集里面存放二维数组

  let queue: any = [root]  // 队列用来存放左右节点，然后依次取出，初始是root
  while(queue.length) {
    let len = queue.length  // 目的是取出多少个元素
    let level: any = []
    while(len--){
      let node = queue.shift()
      level.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result
};