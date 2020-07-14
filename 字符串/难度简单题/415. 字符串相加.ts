// 题目地址：https://leetcode-cn.com/problems/add-strings/

function addStrings(num1: string, num2: string): string {
  let result = '', i = num1.length - 1, j = num2.length - 1, dist = 0
  for(; i >= 0 || j >= 0; i--, j--) {
    if(i > -1) {  // 如果没取到头，继续取
      dist += +(num1[i])
    }
    if(j > -1) {
      dist += +(num2[j]) //没取到头，累加起来
    }
    result = dist%10 + result  // 本次结果%10在为这一位累加位的结果，再拼上上次的结果
    dist = dist > 9 ? 1 : 0  // 本次超过两位了，则要向前进一个数，便于下次继续累加这个1
  }
  result = dist ? dist + result : result  // 加到最后如果dist为1，则说明需要向前进一位，比如 9+9 各位为 8 则向前进一个数，所以在前面加上一个1，就是 18
  return result
};
// 10102

console.log(addStrings('111', '9991'))
console.log(addStrings('', '200'))
console.log(addStrings('0', '0'))
console.log(addStrings('123', '129'))
console.log(addStrings('9333852702227987', '85731737104263'))