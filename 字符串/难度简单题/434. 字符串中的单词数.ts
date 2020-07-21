
// 地址：https://leetcode-cn.com/problems/number-of-segments-in-a-string/

function countSegments(s: string): number {
  s = s.trim()  // 先去除前后空格
  if(s.length === 0) return 0  
  // 先通过空格分割字符串；字符串中间会有需要空格，所以要进行过滤
  return s.split(' ').filter(item => item).length
};