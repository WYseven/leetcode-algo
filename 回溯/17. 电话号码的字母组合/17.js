/**
 * @param {string} digits
 * @return {string[]}
 */

let phone = {
  "0":[],
  "2" : ["a","b","c"],
  "3" : ["d","e","f"],
  "4" : ["g","h","i"],
  "5" : ["j","k","l"],
  "6" : ["m","n","o"],
  "7" : ["p","q","r","s"],
  "8" : ["t","u","v"],
  "9" : ["w","x","y","z"]
}
var letterCombinations = function(digits) {
  if(digits.length === 0) return []
  const result = []

  // digits 要查找的数字字符串；startIndex 该次循环进行的下标起始位置；comString 已经组合的字符串
  const loop = (digits, startIndex, comString) => {
    if(startIndex === digits.length) {
      result.push(comString)
      return
    }
    const letter = digits[startIndex]  // 当前调用回调下标对应的字符

    if(letter === '0') return
    // 字符不符合规定，抛错
   if(!/[1-9]/.test(letter)){
    throw new Error('不符合数字的规定')
   }

    const letterArr = phone[letter]  // 找到数字对应的字符集
    for(let i = 0; i< letterArr.length; i++){
      loop(digits, startIndex + 1, comString + letterArr[i])
    }
  }

  loop(digits, 0, '')
  return result
};

var letterCombinations = function(digits) {
  if(digits.length === 0) return []
  const result = []

  // digits 要查找的数字字符串；startIndex 该次循环进行的下标起始位置；comString 已经组合的字符串
  const loop = (digits, comString) => {

    if(digits === ''){
      result.push(comString)
      return
    }
    
    let letter = digits[0]
    let strArr = phone[letter]

    for(let i = 0; i < strArr.length; i++){
      loop(digits.slice(1), comString + strArr[i])
    }

  }

  loop(digits, '')
  return result
};

var letterCombinations = function(digits) {
  if(digits.length === 0) return []
  const result = []
  result.push('') // 第一层
  for(let i = 0; i < digits.length; i++){

    let len = result.length;  // 层级节点数
    let strArr = phone[digits[i]] // 数字对应的字母

    for(let j = 0; j < len; j++){
      let val = result.shift()  // 原来层级的节点出队
      // 新的层级节点组合进入队列中
      for(let k = 0; k < strArr.length; k++){
        result.push(val + strArr[k])
      }

    }
  }
  
  return result
};



console.log(letterCombinations("23"));
console.log(letterCombinations("923"));