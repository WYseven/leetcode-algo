function startPermute(nums: number[], temp: number[], result: Array<Array<number>>){
  if(nums.length === temp.length){
    result.push([...temp])
  }
  
  for(let i = 0; i < nums.length; i++){
    if(permute.cache[nums[i]]) continue
    temp.push(nums[i])
    permute.cache[nums[i]] = true
    startPermute(nums, temp, result)
    temp.pop()
    permute.cache[nums[i]] = false
  }

}
interface Permute {
  (nums: number[]): number[][]
  cache?: any
}
let permute:Permute = (nums: number[]): number[][] => {

  let result: Array<Array<number>> = []
  let temp: Array<number> = []
  permute.cache = {}
  startPermute(nums, temp, result)
  permute.cache = null
  return result
};


permute.cache = null

console.log(permute([1,2,3]))