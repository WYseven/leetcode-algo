// 地址：https://leetcode-cn.com/problems/valid-palindrome/
/*思路：

  前后两个指针，验证每一个字符是否相同，如果前指针大于等于后指针，则说明是回文

步骤：

  1. 先用正则，取出数字和字母
  2. 定义开始指针初始为0，结束指针初始为 length - 1。
  3. 前指针不断加，取出对应的字符；后指针不断的减，取出对应的字符，两个字符进行比较，直到遇到两个字符不相等为止
  4. 如果前指针小于等于后指针了，说明它们不交叉的部分字符都是相等的
*/
function isPalindrome(s: string): boolean {
  if(s.length === 0) return true
  if(s.length === 1) return true
  
  let res = (s.match(/[a-zA-Z\d]/g) || []).join('')
  let start = 0, end = res.length - 1
  while(start <= end) {

    if(res[start].toLowerCase() !== res[end].toLowerCase()) {
      break
    }
    start++
    end--
  }

  return start>=end
};
