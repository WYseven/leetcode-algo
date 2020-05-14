/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length === 1) return false
  const charSet = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if(charSet[c]) {
      if(charSet[c] !== stack.pop()) {
        return false
      }
    }else {
      stack.push(c)
    }
  }
  return !stack.length 
};

let s = "(()){{()[]}}"

console.log(isValid(s))