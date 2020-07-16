// 地址：https://leetcode-cn.com/problems/buddy-strings/
/** 
思路：

  分了不同情况进行判断，写主要的几个
    1. 如果 A 长度为1，就不能交换，直接就是false
    2. 如果两个字符串中又不一样的字符，再怎么交换也不能相等
    3. 如果两个字符串相等了，看下有没有一个字符是出现两次的，如果出现了，说明交换这两个相同的字符，也和另一个字符串相同
    4. 查看下相同位置有几个是不一样的字符，如果超过两个，则就算交换两个，也不能和另一个字符相同

问题：
  1. 如果快捷的判断两个字符串是否包含的字符都相同
  2. 如何快速的确定一个字符有两个以上的数量
  3. 如何快速的比较位置不同的组合
    
*/

function buddyStrings(A: string, B: string): boolean {
  if(A.length === 0 || B.length === 0) return false  // 为空字符串，则肯定不能换位置，返回false
  // 长度不一样，肯定不行
  if(A.length !== B.length) return false 
  // 只有一个字符，不能换位置，没必要比较了
  if(A.length === 1) return false
  // 包含的字符不一样，肯定不行
  let ANums = 0
  // 将编码相加得到一个数
  for(let i = 0; i < A.length; i++){
    ANums += A.charCodeAt(i)
  }
  let BNums = 0
  for(let i = 0; i < B.length; i++){
    BNums += B.charCodeAt(i)
  }
  // 比较两个编码数，不相同，则肯定又不一样的字符
  if(ANums !== BNums) return false

  // 如果字符串相同
  if(A === B) {
    // 相同的字符超过两个以上，可以交换位置 例如 'aa' 和 'aa'、'abab' 和 'abab'
    let pre = '',Arr: Array<any> = []
    for(let i= 0; i < A.length; i++) {
      if(A[i] !== pre) {
        if(Arr.indexOf(A[i]) !== -1) return true
        Arr.push(A[i])
        pre = A[i]
      }else {
        return true
      }
    }
    return false
  }
  // 如果有多个需要交换位置的，肯定不行；只有一组可以交换位置，则只要交换就可以了
  let count = 0  // 计算不一样的位置s
  for(let i = 0; i < A.length; i++) {
    if(A[i] !== B[i]) {
      count++
      if(count > 2) return false
    }
  }
  return true
};