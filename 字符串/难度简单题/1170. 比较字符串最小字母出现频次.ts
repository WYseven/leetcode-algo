// 地址： https://leetcode-cn.com/problems/compare-strings-by-frequency-of-the-smallest-character/
/*** 
思路：

  把两组单词，每个单词找到最小的，然后对找到的最小单词个数进行一一对比

步骤：

  1. 通过正则找到每一个单词中重复的字符组成数组，对数组进行排序，取第一个，则就是这个字符串中最小的单词
  2. 把最小单词组成的数组进行对比，每一轮从queriesMap中拿出一项，跟queriesMap中全部元素对比长度

*/


function numSmallerByFrequency(queries: string[], words: string[]): number[] {

  if(queries.length === 0 || queries.length === 0) return []
  
  let re = /([a-zA-Z])\1*/g  // 定义正则，目的是把重复的字母找出来
  // 把重复的字母找出来后，每个单词从小到大排序，找单词中最小的字符，组成一个数组
  const queriesMap = queries.map((item) => {
    return ( item.split('').sort().join('').match(re) || [])[0]
  })

  const wordsMap = words.map((item) => {
    return ( item.split('').sort().join('').match(re) || [])[0]
  })
  // 拿出 queriesMap 中每一个最小的字符个数，和 wordsMap中每一个进行长度比较
  return queriesMap.map((item) => {
    let n = 0;
    for(let i = 0; i < wordsMap.length; i++){
      if(item.length < wordsMap[i].length) {
        n++
      }
    }
    return n
  })

};
