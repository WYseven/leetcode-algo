// 地址：https://leetcode-cn.com/problems/long-pressed-name/
/** 
思路：
  
  把两个字符串中连续的字符找出来，添加到数组中，对两个数组的每一项进行比较

步骤：
  1. 写正则，匹配到连续的字符，存放在数组中
  2. 比较两个数组的长度，如果字符都一样，肯定长度相同，如果不一样，长度就不一致；注意：这时候还不能确定字符是否一样
  3. 要比较两个数组每一项，字符是一样的，并且输入的 typed 的每一个字符的个数肯定要大于等于 name 的每一个字符的个数
*/

function isLongPressedName(name: string, typed: string): boolean {
  if(name.length === 0 || typed.length === 0) return false  // 输入的都是空字符串，没意义，直接返回false
  const re = /([a-zA-Z])\1*/g  // 正则，用来匹配连续的字符串
  const nameArr: Array<string> = name.match(re) || [] // 匹配的到每个连续字符串组成的数组，例如：['l','ee','l','ee']
  const typedArr: Array<string> = typed.match(re) || []
  
  if(nameArr.length !== typedArr.length) return false  // 如果两个长度不一样，说明字符串中字符也不一样，直接返回false
  
  // 两个数组的每一组对比，字符要一样，并且typed 的字符个数要大于等于 name的，否则就不是多输入了
  return nameArr.every((item, index) => typedArr[index][0] === item[0] && typedArr[index].length >= item.length)
};


console.log(isLongPressedName('alex', 'aaleex'))
console.log(isLongPressedName('saeed', 'ssaaedd'))
console.log(isLongPressedName('leelee', 'lleeelee'))