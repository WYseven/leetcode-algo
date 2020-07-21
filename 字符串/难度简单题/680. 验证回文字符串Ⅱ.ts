// 地址： https://leetcode-cn.com/problems/valid-palindrome-ii/
/*
思路：

  定义前后两个指针，不相同的字符最多只能是一次，超过一次，直接停止对比。有一次不同的，要前后进行对比下，相同则向前后移动指针。然后再决定向前还是向后移动

步骤：

  1. 用正则取出只有字母和数字组成的字符串
  2. 定义计数器，如果超过一次字符并不相同，则直接停止对比
  3. 如果有一次不相同的，则进行如下操作：
    a. 前指针向后一位和后指针位置相同，并且后指针位置向前一位和前指针相同，则前指针和后指针都改动；目的是规避一个不是匹配的，并且都和对应位置相同
    b. 完事后，因为规避了一个，所以一边要在移动下，怎么移动呢？
        1. 如果前指针向后一个和后指针相同，则要移动前指针向后
        2. 如果后指针向前一个和前指针相同，则后指针向前移动一位
  4. 最后判断是否前指针大于等于后指针
*/

function validPalindrome(s: string): boolean {
  if(s.length === 0) return true
  if(s.length === 1) return true
  
  let res = (s.match(/[a-zA-Z\d]/g) || []).join('')
  let start = 0, end = res.length - 1
  let count = 0
  while(start <= end) {
    if(res[start].toLowerCase() !== res[end].toLowerCase()) {
      count++
      if(count > 1) break
      // 尝试和下一个或上一个进行匹配
      let s = start + 1, e = end - 1

      if(res[s] === res[end] && res[start] === res[e]) {
        start++
        end--
      }
      s = start + 1, e = end - 1
      
      if(res[s] === res[end]) {
        start++
      }else if(res[start] === res[e]){
        end--
      }

    }else {
      start++
      end--
    }
  }
  
  return start>=end
};