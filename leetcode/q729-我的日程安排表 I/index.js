var MyCalendar = function() {
  this.arr = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
 if(!this.arr.length) {
   this.arr.push([start, end])
   return true
 }
 for(let i = 0; i < this.arr.length; i++){
   let item = this.arr[i]
   console.log(item, start, item[0], end, item[1])
   if(start < item[0] || start > item[1]){
    return false
   }
   if(end < item[0] && end > item[1]){
    return false
   }
 }
 this.arr.push([start, end])
 return true
};

const My = new MyCalendar()
console.log(
  My.book(10, 20),
  My.book(15, 25),
  My.book(20, 30),
  My.book(5, 15)
)
