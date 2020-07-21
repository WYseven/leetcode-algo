// 地址： https://leetcode-cn.com/problems/string-matching-in-an-array/

/*
思路：

  那数组的一个单词，分别和其他的单词进行比较，符合设定的条件，则添加到结果集中

步骤：

  1. 每一轮取出一个单词为 one
  2. 那 one 和每一个单词比较
      a. 同一个单词比较，没必要
      b. 如果要比较的单词长度 小于 one 的长度，则肯定不是子串,没意义
      c. 如果one 不存在要比较的单词中，没必要
      d. 如果结果集中已经有 one 这个词了，没必要添加了
*/

function stringMatching(words: string[]): string[] {
  if(words.length === 0 || words.length === 1) return []
  const result: Array<string> = []
  let len = words.length
  // 依次循环每一个单词，和数组中其他的单词比较
  for(let i = 0; i < len; i++) {
    const one = words[i]  // 取出一个单词，准备和其他的单词进行比较
    for(let j = 0; j < len; j++){
      if( i === j) continue // 如果是同一个位置的单词，没必要比较
      if(words[j].length < one.length) continue // 如果比要比较的单词长，则说明肯定不是子串
      if(words[j].indexOf(one) !== -1 && result.indexOf(one) === -1) { // 当是要比较的子串，并且结果集中不存在，则添加到结果集中
        result.push(one)
      }
    }
  }
  return result
};