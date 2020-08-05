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

function inorderTraversal(root: TreeNode | null): number[] {

  if(root === null) return []

  let stack:Array<any>  = []
  let result: number[] = []
  let p: any = root
  // 依次找到左侧，压入到栈内，然后找右侧
  while(p || stack.length) {
    while(p) {   // 找每个元素的的所有左边，至到找完
      stack.push(p)
      p = p.left
    }
    p = stack.pop()  // 将左侧出栈，并拿到值
    if(p) result.push(p.val)
    p = p.right  // 开始右侧了
  }

  return result

};