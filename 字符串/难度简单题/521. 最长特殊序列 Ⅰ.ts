// 题目地址：https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/
/** 
  思路：
    1. 如果字符串 length 不相同，则取最大的
    2. 如果 length 相同，并且两个字符串不相同，返回字符串的长度
    3. 否则返回 -1
*/

function findLUSlength(a: string, b: string): number {
  let aLen = a.length, bLen = b.length
  if(aLen !== bLen) return Math.max(aLen, bLen)
  if( a !== b) return aLen
  return -1
};

console.log(findLUSlength('aba', 'cdcd'))
console.log(findLUSlength('aaa', 'bbb'))
console.log(findLUSlength('aaa', 'aaa'))