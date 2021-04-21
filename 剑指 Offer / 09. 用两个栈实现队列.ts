
class CQueue {
  private stack1: Number[] = []
  private stack2: Number[] = [] 
  constructor() {

  }

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    if(!this.stack1.length && !this.stack2.length) {
      return -1
    }
    if(this.stack2.length) return this.stack2.pop() as number
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop() as number
  }
}

let  qu = new CQueue()
qu.appendTail(1)
qu.appendTail(2)
qu.appendTail(3)

console.log(qu.deleteHead());
console.log(qu.deleteHead());
console.log(qu.deleteHead());
console.log(qu.deleteHead());

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/