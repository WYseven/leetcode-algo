/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  if(s.length === 0) return 
  s += '&'
  // 用一个栈存放计算后的值
  let stack = []
  // 符号，默认为 + 
  let singed = '+'
  let nums = 0
  for(let i = 0; i < s.length; i++){
    const char = s[i]
    if(char === ' ') continue  // 为空，则跳过
    if(!Number.isNaN(+char)) {  // 是数字，则找到连续的数字
      // * 10 是每次扩大一位
      nums = nums * 10 + (+char)
    }
    // 非数字，为符号
    if(Number.isNaN(+char)){
      switch(singed){
        case '+':
          stack.push(+nums)
        break;
        case '-':
          stack.push(-nums)
        break;
        case '*':
          stack.push(stack.pop() * nums)
        break;
        case '/':
          stack.push(stack.pop() / nums | 0)
        break;
      }
      singed = char
      nums = 0
    }
  }

  return stack.reduce((ret, item) => ret + item, 0)
};

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));