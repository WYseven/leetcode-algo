/**
 * @param {number} n
 * @return {number}
 */
let result = {}
var fib = function(n) {
  if(n <= 1) return n
  // if(result[n]) return result[n]
  // result[n] = fib(n - 1) + fib(n - 2)
  let pre1 = 0, pre = 1, sum = 0;

  for(let i = 2; i <= n; i++){
    sum = (pre1 + pre) % 1000000007
    pre1 = pre
    pre = sum
  }
  
  return sum
};


console.log(fib(2));
console.log(fib(5));
console.log(fib(44)); 
console.log(fib(45));
console.log(fib(81));