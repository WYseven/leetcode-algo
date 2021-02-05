/**
 * @param {number} n
 * @return {number}
 */

// var integerBreak = function(n) {
  
//   if(n === 1) return 1

//   // 对整数n进行分割两个数，求获得的最大乘积
//   const loop = (n) => {
//     if(n === 1) return 1;
//     let res = -1
//     for(let i = 1; i <= n - 1; i++){
//       res = Math.max(res, i * (n - i), i * loop(n - i))
//     }

//     return res
//   }
//   return loop(n)
// };

// var integerBreak = function(n) {
  
//   if(n === 1) return 1
//   let cache = {}
//   // 对整数n进行分割两个数，求获得的最大乘积
//   const loop = (n) => {
//     if(n === 1) return 1;
//     // 如果已求值，则直接返回
//     if(cache[n]) return cache[n]
//     // 结果
//     let res = -1
//     for(let i = 1; i <= n - 1; i++){
//       // 找最大值
//       res = Math.max(res, i * (n - i), i * loop(n - i))
//     }
//     // 计算后，缓存起来
//     cache[n] = res

//     return res
//   }
//   return loop(n)
// };

var integerBreak = function(n) {
  if(n === 1) return 1
  let cache = {}

  cache[1] = 1  // 
  // 求出从 1 → n 之间每个数的结果
  for(let i = 2; i <= n; i++){
    // 求解 i 的值
    // 把 i 进行从 1 到 i-1 的分割
    for(let j = 1; j <= i - 1; j++){
      // 分割成两部分 j + ( i - j )
      cache[i] = Math.max( cache[i] || -1, j * (i-j), j * cache[i-j])
    }

  }
  return cache[n]
}

// i - j 是小于i的，已经被计算出来了

console.log(integerBreak(10));