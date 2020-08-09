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

function postorderTraversal(root: TreeNode | null): number[] {
  if(root === null) return []
  let stack:Array<any>  = []
  let result: number[] = []
  let p: any = root
  while(p || stack.length) {
    // 依次找右侧
    while(p){
      result.push(p.val)
      stack.push(p)
      p = p.left
    }
    p = stack.pop()
    p = p.right
  }
  return result.reverse()
};