let obj: any = {
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
// digists 要查找的数字字符串
// index 查找到了第几个字符的索引
// s 累加的结果
function findCombination(digits: string, index: number, s: string, result: Array<string>){
  // 终止条件
  if(index >= digits.length){  // 下标不能超过字符串的长度，否则寻找结束，s就是结果
    result.push(s)
    return
  }
  // 通过索引找到要处理的字符
  let letter = digits[index]
  // 边界：不能是 小于0 等于1 大于9的数
  if(+letter <= 0 || +letter === 1 || +letter > 9 ){
    throw new Error('字符不合法')
  }
  // 找到数字字符，对应的字母集
  let letters = obj[letter]
  
  // 遍历每一个字母
  for(let i = 0; i < letters.length; i++) {
    // 递归：继续进行下一个字符的寻找,并把本次拼成的结果传递到下一次
    findCombination(digits, index + 1, s + letters[i], result)
  }

}
function letterCombinations(digits: string): string[] {
  let result: Array<string> = []  // 结果集
  if(digits === '') return result
  findCombination(digits, 0, '', result)
  return result

};


console.log(letterCombinations('234'))