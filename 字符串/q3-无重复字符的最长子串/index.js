// 思路一
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let flag = s.charAt(0)
  let maxLen = flag.length
  let indexOf = 0;
  for(let i = 1; i < s.length; i++){
    if((indexOf = flag.indexOf(s.charAt(i))) === -1) {  // 不在flag中, 则继续累加
      flag += s.charAt(i)   // 虽然和下面一样，但是不能抽离在if之外
      if(maxLen < flag.length) {  // 累加过程中，同时判断大最长度
        maxLen = flag.length
      }
    }else { // 在flag中
      flag += s.charAt(i)  // 先把这个值累加上
      flag = flag.slice(indexOf+1)  // 从累加的值中找到存在的位置，截取到最后
    }
  }
  return maxLen
};

// 思路二

/**
 * @param {string} s
 * @return {number}
 */
// 维护一个 [start end] 之间不重复的字符串位置，遇到重复的就更新 start的值为找到重复值的位置 + 1
var lengthOfLongestSubstring = function(s) {

  let start = 0, // 记录从这个位置开始，到end不重复字符串的开始位置
      end = 0,  // 依次找到字符串中的每个字符
      map = {}, // 存入每个已字符为 key，下标+1 为value的值，如果找到重复的元素，把这个value位置的值赋给 start
      len = s.length,
      max = 0, // 记录最大不重复字符串的长度
      count = 0; // 每当找到重复的字符，都用此时位置 - 开始位置，得到这个区间内字符串的长度

  for(; end < len; end++ ){
    if(map[s[end]] > start){ // 只有存在对象中重复的字符的下标，大于开始位置，才有效，排除靠前重复的元素
      count = end - start // 拿到不重复字符串的长度
      if(count > max) { // 大于了计算的max最大值，则更新 max
        max = count
      }
      start = map[s[end]] // 将开始下标更新为当前找到的重复字符的下标+1位置，方便下次继续计算
    }
    map[s[end]] = end + 1; // 将字符和下标+1，存入或更新
  }
  count = end - start // 结束后，再计算一次
  return count > max ? count : max
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring("aabaab!bb"))
console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring("abba"))
