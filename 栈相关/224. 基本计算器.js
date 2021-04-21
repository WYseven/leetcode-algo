/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  if(s.length === 0) return 0
  // 存放-1 +1 这样的符号,代表减还是加
  let stack = [1]
  let sigend = 1 // 当前的符号

  let ret = 0 // 存放结果
  for(let i = 0; i < s.length; i++){
    const char = s[i]
    if(char === ' ') continue
    switch(char) {
      case '+':
        sigend = stack[stack.length - 1]
      break;
      case '-':
        sigend = -stack[stack.length - 1]
      break;
      case '(':
        stack.push(sigend)
      break;
      case ')':
        sigend = stack.pop()
      break;
      default: 
        let j = i,nums = 0
        while(j <= s.length - 1) {
          if(s[j] === ' ') {
            j++
            continue
          }
          if(!Number.isNaN(+s[j])){
            nums = nums * 10 + (+s[j])
            j++
          }else {
            break;
          }
        }
        i = j - 1
        ret += sigend * nums
    }

  }
  return ret
};

// console.log(calculate("1 + 1"));
// console.log(calculate("123 + 145"));
// console.log(calculate(" 2-1 + 2 "));
//console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
console.log(calculate("- (3 + (4 + 5))"));
console.log(calculate(" 2-1 + 2 "));