// 现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。

// 实现 SmallestInfiniteSet 类：

// SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
// int popSmallest() 移除 并返回该无限集中的最小整数。
// void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集中。

class PQ {
  constructor(heap = [], compareFn = (a, b) => a - b) {
    this.heap = heap;
    this.compare = compareFn;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value === undefined || value === null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    const size = this.size();
    let idx = size - 1;
    let parentIdx = this.getParentIdx(idx);
    while (
      parentIdx >= 0 &&
      this.compare(this.heap[idx], this.heap[parentIdx]) < 0
    ) {
      // 交换
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this.swap(0, size - 1);
    const res = this.heap.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      while (
        leftIdx < size &&
        this.compare(this.heap[idx], this.heap[leftIdx]) > 0
      ) {
        idx = leftIdx;
      }
      while (
        rightIdx < size &&
        this.compare(this.heap[idx], this.heap[rightIdx]) > 0
      ) {
        idx = rightIdx;
      }
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

var SmallestInfiniteSet = function () {
  const arr = new Array(1000).fill(0).map((_v, i) => i + 1);
  this.pq = new PQ(arr);
  this.set = new Set(arr);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const res = this.pq.poll();
  this.set.delete(res);
  return res;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (!this.set.has(num)) {
    this.set.add(num);
    this.pq.insert(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

const pq = new PQ();

pq.insert(5);
console.log(pq.heap);
pq.insert(1);
console.log(pq.heap);
pq.insert(0);
console.log(pq.heap);
pq.insert(8);
console.log(pq.heap);
pq.insert(9);
console.log(pq.heap);
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());

