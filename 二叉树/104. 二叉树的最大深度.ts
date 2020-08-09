// 地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/


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

function maxDepth(root: TreeNode | null): number {
  if(root === null) return 0

  let ln = maxDepth(root.left)
  let rn = maxDepth(root.right)
  return Math.max(ln, rn) + 1
};