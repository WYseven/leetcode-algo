// 题目地址：https://leetcode-cn.com/problems/is-unique-lcci/

/** 
 * 解题思路：
 * 1. 利用indexOf 和 lastIndexOf，从前向后找，和从后向前找，如果位置不同，则说明还存在另外一个字符，直接返回false
 * 2. 利用存放数组和对象，确定只存放一项，如果再存放已经存在，则说明已经有字符了，直接返回false
*/

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let chart = ''
  for(let i = 0; i < astr.length; i++){
    if(astr.slice(i+1).indexOf(astr.charAt(i)) > -1) {
      return false
    }
  }
  return true
};

const str = 'abcb'

console.log(isUnique(str))