// interface LinkNodeBaseFace {
//   key: number;
//   value: number;
// }
// interface LinkNodeFace extends LinkNodeBaseFace{
//   next: LinkNodeBaseFace
//   prev: LinkNodeBaseFace
// }
class LinkNode {
  public key:number
  public value: number
  public next: LinkNode
  public prev: LinkNode
  constructor(key: number, value: number){
    this.key = key
    this.value = value
    this.next = null 
    this.prev = null 
  }
}

class DoubleList {
  private head: LinkNode
  private tail: LinkNode
  private size: number
  constructor(){  // 初始
    this.head = new LinkNode(0,0)
    this.tail = new LinkNode(0,0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }

  public addLast(n: LinkNode): void{
    n.prev = this.tail.prev
    n.next = this.tail
    this.tail.prev.next = n
    this.tail.prev = n
    this.size += 1
  }
  public remove(n: LinkNode) :void {
    n.prev.next = n.next
    n.next.prev = n.prev
    this.size -= 1
  }
  public removeFirst(): LinkNode | null{
    if(this.head.next === this.tail) return null
    const first = this.head.next
    this.remove(first)
    return first
  }
  public getSize(){return this.size}
}

class LRU {
  private map: Map<number, LinkNode>
  private cache: DoubleList = new DoubleList
  public cap: number // 最大容量
  constructor(cap){
    this.cap = cap
  }

  public get(key: number): LinkNode | null{
    if(!this.map.has(key)) return null 
    this.makeRecently(key)  // 提升为最近使用
    return this.map.get(key)
  }

  public put(key: number, val: number){
    // 存在，就先删除，再添加上
    if(this.map.has(key)) {
      this.removeRecently(key)
      this.addRecently(key, val)
      return
    }
    if(this.cache.getSize() > this.cap){  // 超出规定了
      this.removeLeastRecently()
    }
    this.addRecently(key, val)
  }

  // 将某个key提升在最上面
  private makeRecently(key: number) {
    // 先用 map 通过 key 拿到节点
    const n:LinkNode = this.map.get(key)
    this.cache.remove(n)  // 先删除
    this.cache.addLast(n) // 再提升
  }
  // 添加最近使用的
  private addRecently(key: number, val: number): void {
    const n: LinkNode = new LinkNode(key, val)
    this.cache.addLast(n)
    this.map.set(key, n)
  }
  // 删除某个key值
  private removeRecently(key) {
    const n: LinkNode = this.map.get(key)
    this.map.delete(key)
    this.cache.remove(n)
  }
  // 删除最久未使用的元素
  private removeLeastRecently() {
    const f = this.cache.removeFirst()
    this.map.delete(f.key)
  }
}