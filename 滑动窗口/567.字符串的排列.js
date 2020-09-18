/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 计数累加不靠谱

var checkInclusion = function(s1, s2) {
  if(s1.length > s2.length) return false

  let map1 = {}, map2 = {}, len1 = s1.length, len2 = s2.length;

  for(let i = 0; i < len1; i++){
    map1[s1[i]] = (~~map1[s1[i]]) + 1
    map2[s2[i]] = (~~map2[s2[i]]) + 1
  }

  let start = len1;

  for(; start < len2; start++){
    if(sameMap(map1, map2)) return true
    map2[s2[start - len1]]--
    map2[s2[start]] = (~~map2[s2[start]]) + 1
  }
  return sameMap(map1, map2)
};

let sameMap = (map1, map2) => Object.keys(map1).every(key => map1[key] === map2[key])

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("abc", "cccbbbbaaaa"))