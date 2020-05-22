/**
 * @param {number} n
 * @return {number}
 */
/** 
 * 
 * 把n分成 从 1+(n-1)，2+(n-2)，3+(n-3)，...i + (n-i) 分下去
 * 而每次n-1又可以分解为 1 + (n-2) 2+(n-3) ... i + (n - i - 1)
 * 使用递归的方式，解决每一个子问题，然后得到最优解
*/
let mome = {}
// 将n至少进行分割两部分，得到的最大乘积
var integerBreak = function(n) {
  if(n <= 1) return n;
  // 已经算过了，直接返回
  if(mome[n]) return mome[n]
  let res = -1
  for(let i = 1; i <= n - 1; i++){
    res = Math.max(res, i * (n - i), i * integerBreak(n - i))
  }
  // 存储本次计算的最大值
  mome[n] = res
  return res
};


console.log(integerBreak(10))