/**
 * @param {number} n
 * @return {number}
 */
let mome = {}
// 将n至少进行分割两部分，得到的最大乘积
// 递推的方式
var integerBreak = function(n) {
  if(n <= 1) return n;
  
  let mome = {}
  mome[1] = 1;
  // 数字从1开始，已经存了，所以剩下的就从2开始了
  for(let i = 2; i <= n; i++){
    for(let j = 1; j <= i - 1; j++){
      mome[i] = Math.max( mome[i] || -1, j * (i-j), j * mome[i-j])
      
    }
  }
  return mome[n]
};


console.log(integerBreak(10))