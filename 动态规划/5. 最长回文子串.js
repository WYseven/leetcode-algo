/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(s.length === 0) return s 
  let len = s.length
  let dp = new Array(len).fill(1).map(() => new Array(len))
  let maxLen = 1, start = 0

  for(let i = 0; i < len;i++){
    for(let j = 0; j <= i; j++){
      if(i - j < 2){
        dp[j][i] = s[i] === s[j]
      }else {
        dp[j][i] = dp[j+1][i-1] && s[i] === s[j]
      }
      if(dp[j][i] && i - j + 1 > maxLen){
        maxLen = i - j + 1
        start = j
      }

    }
  }
  return s.substring(start, start + maxLen)
};


console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('ac'));