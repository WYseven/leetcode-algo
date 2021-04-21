/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {

  if(s.length === 0) return true
  if(s.length === 1) return true

  let start = 0;
  const re = /[a-zA-Z\d]/g
  const arr = (s.match(re) || []).map(item => item.toLocaleLowerCase())
  
  // let end = arr.length - 1;
  // while(start < end) {
  //   if(arr[start] !== arr[end]) return false
  //   start++
  //   end--
  // }
  
  return arr.join() === arr.reverse().join()

};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));