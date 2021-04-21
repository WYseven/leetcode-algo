function calculate(s){
  if(s.length === 0 ) return 0
  s += '&'
  const stack = []  // 存放计算后的结果
  let sign = '+'  // 符号
  let nums = 0
  for(let i = 0; i < s.length; i++){
    const char = s[i]
    if(char === ' ') continue
    if(!Number.isNaN(+char)){  // 继续找下一个数字
      nums = nums * 10 + (char - '0')
    } else if(char === '('){
      // 要去找右括号，然后进行递归
      let j = i, level = 0
      for(;j < s.length; j++) {
        if(s[j] === ' ') continue
        if(s[j] === '(') level++
        if(s[j] === ')') level--
        if(level === 0) break
      }
      nums = calculate(s.slice(i+1, j))
      i = j - 1
    } else {
      switch(sign) {
        case '+':
          stack.push(nums)
          break
        case '-':
          stack.push(-nums)
          break
        case '*':
          stack.push(stack.pop() * nums)
          break
        case '/':
          stack.push(stack.pop() / nums | 0)
          break
      }

      sign = char
      nums = 0

    }

  }
  
  return stack.reduce((ret, num) => ret + num, 0)
}


// console.log(calculate("1 + 1" ));
// console.log(calculate("1 + 1 + ( 2 + (2 + 3) )" ));
// console.log(calculate("1 + 1 + ( 2 + (2 * 3 + 7 ) )" ));
// console.log(calculate(" 6-4 / 2 " ));
console.log(calculate("2*(5+5*2)/3+(6/2+8)" ));