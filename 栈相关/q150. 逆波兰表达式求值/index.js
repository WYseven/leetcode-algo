/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let oparStack = []

  for(let i = 0; i < tokens.length; i++) {
    const item = tokens[i]
    if(!isNaN(item)) {  // 数字
      oparStack.push(item)
    }else {
      let one = oparStack.pop()
      let two = oparStack.pop()
      if(item === '+'){
        oparStack.push(parseInt(+one+(+two)))
      }else if (item === '*') {
        oparStack.push(parseInt(one*two))
      }else if (item === '/') {
        oparStack.push(parseInt(two/one))
      }else if (item === '-') {
        oparStack.push(parseInt(two-one))
      } 
    }
  }
  return parseInt(oparStack[0])
};

const arr = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

console.log(evalRPN(arr))

