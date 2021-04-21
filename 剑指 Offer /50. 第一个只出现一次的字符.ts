function firstUniqChar(s: string) : string {
  if(s.trim().length === 0) return " "
  let map2 = new Map()

  for(let i = 0; i < s.length; i++) {
    if(map2.has(s[i])) map2.set(s[i], false)
    else map2.set(s[i], 1)
  }

  for(let [key , value] of map2) {
    if(value === 1) return key
  }

  return ' '

};

console.log(firstUniqChar("abaccdeff"));
console.log(firstUniqChar("abbaccdeff"));
console.log(firstUniqChar(" "));