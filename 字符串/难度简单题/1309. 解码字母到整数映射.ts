// 地址：https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
/*** 
思路：

  通过找到 xx#，替换为字母，然后把替换后的字符串找到剩下的数字进行替换，主要用的是字母的十进制 ASCII 编码

步骤：

  1. 定义匹配两个数字一个 # 的正则，匹配拿到数字，把这个数字 +96 就对应一个字母的十进制 ASCII 编码，然后通过 String.fromCharCode 转成字母
  2. 上一步替换后的字符串还有数字没被匹配，所以匹配到数字，转成对应的字母

*/

function freqAlphabets(s: string): string {

  if(s.length === 0) return ''
  const point = 96  // 找到字母的数字编码，比如 'a' 是 97 然后减去 96 就能做一个映射, 1 -> 'a' 2 -> 'b'
  const S = s.replace(/\d{2}#/g, ($0) => {
    return String.fromCharCode(parseInt($0) + point)  // 通过正则匹配到 两个数字一个 # 号形式，然后通过 数字 + point，转成字母
  }).replace(/\d/g, $0 => String.fromCharCode(+$0 + point))  // 再找到所有数字，再进行替换

  return S
};