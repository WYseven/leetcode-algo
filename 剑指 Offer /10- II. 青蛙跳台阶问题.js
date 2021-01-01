/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if(n === 0) return 1
  if(n === 1) return 1
  if(n === 2) return 2
  if(n === 3) return 3

  let pre = 2, pre1 = 1,sum = 0;

  for(let i = 3; i <= n; i++){
    sum = (pre + pre1) % 1000000007
    pre1 = pre
    pre = sum
  }
  return sum
};


console.log(numWays(4));
console.log(numWays(5));