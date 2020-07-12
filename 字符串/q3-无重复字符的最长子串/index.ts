
/** 
 思路：
 1. 定义两个指针，一个一直向前找每个字符，为 i,另一个为不重复字符串的起始位，为start，保证start到i之间是不重复连续字符串的位置
 1. 挨个字符去找，存在对象中，key为字符，value为字符所在的位置
 2. 如果某个字符存在对象中，则说明有重复了，则更新start的位置向前一位
 3. 有一种情况，如果找到重复的字符的下标大于start，则直接更新为重复下标位置；如果下标大于start，则继续为start

 备注：
  没有用max，因为max比直接判断要慢些
*/

function lengthOfLongestSubstring(s: string): number {
  if(s.length <= 1) return s.length;
  let i = 0, start = 0, map: {[key: string]: number} = {}, len = s.length, maxLen = 0,count = 0;
  for(;i < len; i++){
    if(map[s.charAt(i)] > start) {  // 已经存在了
      count = i - start // 计算之间start 到 当前字符之间的长度
      if(maxLen < count) maxLen = count   // 采用大的
      start = map[s.charAt(i)]  // 更新下 start 的位置
    }
    map[s.charAt(i)] = i + 1  // 每次存下字符对应的位置
  }
  count = i - start;  // 最后算一遍
  return maxLen < count ? count : maxLen
};

console.log(lengthOfLongestSubstring('abcabcdb'))