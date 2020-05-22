let json = {}
let num = 0;
function fib(n){
  num++;
  if(n === 0) return n
  if(n === 1) return n
  if(!json[n]) {
    return json[n] = fib(n - 1) + fib(n-2)
  }
  return json[n]
}

console.log(fib(20))
console.log(num)