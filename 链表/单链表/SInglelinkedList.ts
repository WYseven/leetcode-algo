// 定义节点
class ListNode {
  value: any
  next: any
  list: any
  constructor(value, next, list, flag){
    this.value = value
    this.list = list
    this.next = null
    if(next) {
      if(flag === 'push'){
        next.next = this
      }else if(flag === 'unshift'){
        this.next = next
      }
      
    }
  }
}

function push(link, item){
  link.tail = new ListNode(item, link.tail, link, 'push')
  if(!link.head) {
    link.head = link.tail
  }
  link.length++
}

function unshift(link, item){
  link.head = new ListNode(item, link.head, link, 'unshift')
  if(!link.tail) {
    link.tail = link.head
  }
  link.length++
}

class SingleLink {
  head: any
  tail: any
  length: number
  constructor(params?: any){
    this.length = 0
    if(params && params.forEach) {
      params.forEach(item => {
        push(this, item)
      })
    }
    
  }

  push(...args){
    args.forEach(item => {
      push(this, item)
    })
    return this.length
  }

  pop(){  // 删除最后一个，需要找到倒数第二个，把next设置为null；把link.tail 设置为倒数第二个
    if(!this.tail) return undefined
    if(!this.head) return undefined
    const oldTail = this.tail
    if(this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length--
      return oldTail
    }
   
    // 每次要找到倒数第二个
    let head = this.head
    while(head) {
      if(head.next === this.tail){
        break
      }
      head = head.next
    }
    head.next = null
    this.tail = head
    this.length--
    return oldTail
  }
  
  unshift(...args){
    args.reverse().forEach(item => {
      unshift(this, item)
    })
    return this.length
  }

  shift(){
    if(!this.head) return undefined
    const oldHead = this.head
    if(this.head.next) this.head = this.head.next 
    else this.head = null
    if(this.head === null) this.tail = null
    this.length--
    return oldHead
  }

  removeNode(node: any){  // 删除指定节点
    if(!this.head) return false
    if(node.list !== this) {
      throw new Error('删除的节点不在此链表中')
    }
    if(node === this.head) {
      this.length--
      this.head = this.tail = this.head.next
      return
    }
    let internalNode = this.head
    while(internalNode && internalNode.next) {
      if(internalNode.next === node) {
        internalNode.next = node.next
        if(this.tail === node) {
          this.tail = internalNode
        }
        if(!this.head) this.tail = null
        this.length--
        return true
      }
      internalNode = internalNode.next
    }
    return false
  }

  forEach(cb: (item?: any, context?: any) => void, context?: any){
    let someNode = this.head
    while(someNode) {
      cb.call(context || this, someNode, this)
      someNode = someNode.next
    }
  }
  reverse(){  // 翻转单链表
    if(!this.head) return this
    
    let preNode = null  // 上一个节点
    let currentNode = this.head // 当前需要翻转的节点

    while(currentNode) {
      const middle = currentNode.next 
      currentNode.next = preNode
      preNode = currentNode
      currentNode = middle
    }
    const oldTail = this.tail
    this.head.next = null 
    this.tail = this.head
    this.head = oldTail
    return this
  }
  toArray(){  // 转成数组
    if(!this.head) return []

    let node = this.head, result: Array<any> = []

    while(node) {
      result.push(node.value)
      node = node.next
    }
    return result
  }
  get(n: number = 0){  // 获取第n个值,下标从0开始
    if(n>=this.length || n < 0) return undefined
    let node = this.head
    let count = 0
    while(node) {
      if(n === count) return node 
      node = node.next
      count++
    }
  }
  map(cb: (item?: any, context?: any) => any, context?: any){
    const newLink = new SingleLink()
    if(!this.head) return newLink

    // 用for 或 while 方便 异步能停下来
    let node = this.head  
    while(node) {
      newLink.push(cb.call(context || this, node, this))
      node = node.next
    }
    return newLink
  }

  slice(from: number, to?: number){
    let start = from || 0
    let end = to || this.length

    if(start < 0) start += this.length
    if(end < 0) end += this.length
    const newLink = new SingleLink()
    if(!this.head) return newLink
    if(start > end) return newLink

    if(end > this.length) end = this.length
    let node = this.head
    let count = 0
    while(node) {
      if(count >= start && count < end) {
        newLink.push(node.value)
      }
      count++
      node = node.next
      if(count === end) break
    }
    return newLink
  }

  // splice(from: number = 0, to: number = 0) {
  //   let start = from || 0
  //   let end = to || this.length
  // }

  find(cb: (item?: any, context?: any) => any, context?: any){  // 根据条件查找元素
    if(!this.head) return undefined
    let node = this.head
    while(node) {
      if(cb.call(context || this, node, this)) {
        return node
      }
      node = node.next
    }
    return undefined
  }
}