/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// 把每个节点的左侧指向右侧节点，只是递归的做root.left.next = root.right，则无法跨父级连接
// 需要定义一个函数，含义是，把左侧节点的next指向right节点

var connect = function(root) {
    if(root === null) return root 

    // 辅助函数，传入的就是左右节点，把左节点的next指向右节点
    const connect2 = (node1, node2) => {
      if(node1 === null || node2 === null) return null 
      node1.next = node2;
      connect2(node1.left, node1.right)
      connect2(node2.left, node2.right)
      // 跨父级
      connect2(node1.right, node2.left)
    }

    connect2(root.left, root.right)

    return root
};