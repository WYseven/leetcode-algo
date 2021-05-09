/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 利用递归，自顶向下做，减少amount的值

var coinChange = function(coins, amount) {

  const memo = {}

  const loop = (n) => {
    if(memo[n]) return memo[n]
    if(n === 0) return 0
    if(n < 0) return  -1
    let res = Infinity
    for(let i = 0; i < coins.length; i++){
      const r = loop(n - coins[i])
      if(r === -1) continue
      res = Math.min(res, 1 + r)
    }
    memo[n] = res === Infinity ? -1 : res
    return memo[n]
  }
  return loop(amount)
};

var coinChange = function(coins, amount) {

  if(coins.length === 0) return 0
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for(let i = 0; i < amount + 1; i++){
    for(let j = 0; j < coins.length; j++){
      if(i - coins[j] < 0) continue
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  console.log(dp);
  return dp[amount] === amount + 1 ? -1 : dp[amount]
  
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));