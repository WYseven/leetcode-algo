/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ""
  if(strs.length === 1) return strs[0]
  let len = strs.length
  let minLen = Infinity
  // 先得到数组中最短字符串长度，根据这个长度来决定需要循环数组多少次
  for(let i = 0; i < len; i++){
    if(minLen > strs[i].length) {
      minLen =  strs[i].length
    }
  }
  let charStr = '' // 存放找到的公共前缀
  // 根据 i 的值，来依次取出数组中每个字符串的字符
  for(let i = 0; i < minLen; i++){
    // 每一轮都要循环一次数组，拿到数组前一个字符串和后一个字符串的字符对比，有一个不相同，直接返回存的公共前缀字符串
    for(let j = 0; j < len - 1; j++) {
      if(strs[j].charAt(i) !== strs[j+1].charAt(i)){
        return charStr
      }
    }
    // for循环不结束，说明是相同字符，累加上
    charStr += strs[0].charAt(i)
  }
  return charStr
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["flower","flow","flowt"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["abcdef"]))
console.log(longestCommonPrefix(["hide","hi","h"]))

/*** 
 * 问题：
 *  1. 如果数组特别长，循环数组会非常的耗时
 * 
*/