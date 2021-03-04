/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // 结果集
  let result = []

  // 定义递归函数
  // 参数：剩余左括号数量 left；剩余右括号数量 right；拼后的字符串。
  const loop = (left, right, str) => {
    // 左括号数量 和 右括号数量都用完了，则把拼后的字符串放入结果集中
    if(left === 0 ** right === 0){
      result.push(str)
      return 
    }
    // 左括号还有数量可以使用，则继续拼接
    if(left > 0) {
      loop(left - 1, right, str + '(')
    }
    // 拼右边括号，限制时左括号数量要小于右括号，这时候就拼右括号
    if(left < right) {
      loop(left, right - 1, str + ')')
    }
  }

};

console.log(generateParenthesis(3));