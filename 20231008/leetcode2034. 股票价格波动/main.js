// 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。

// 不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。某些情况下，有的记录可能是错的。如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。

// 请你设计一个算法，实现：

// 更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格。
// 找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格。
// 找到当前记录里股票的 最高价格 。
// 找到当前记录里股票的 最低价格 。
// 请你实现 StockPrice 类：

// StockPrice() 初始化对象，当前无股票价格记录。
// void update(int timestamp, int price) 在时间点 timestamp 更新股票价格为 price 。
// int current() 返回股票 最新价格 。
// int maximum() 返回股票 最高价格 。
// int minimum() 返回股票 最低价格 。

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    // 默认小根堆
    this.compareFn = compareFn;
    this.heap = [];
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
    if (value === null) return false;
    const size = this.size();
    this.heap.push(value);
    this.shiftUp(size);
    return true;
  }
  shiftUp(idx) {
    let parentIdx = this.getParentIdx(idx);
    while (idx && this.compareFn(this.heap[idx], this.heap[parentIdx]) < 0) {
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
    const removeValue = this.heap.pop();
    this.shiftDown();
    return removeValue;
  }
  shiftDown() {
    let idx = 0;
    let temp = idx;
    const size = this.size();
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (
        leftIdx < size &&
        this.compareFn(this.heap[idx], this.heap[leftIdx]) > 0
      ) {
        idx = leftIdx;
      }
      if (
        rightIdx < size &&
        this.compareFn(this.heap[idx], this.heap[rightIdx]) > 0
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

var StockPrice = function () {
  this.currentData = []; // [time, price]
  this.minHeap = new MinHeap();
  this.maxHeap = new MinHeap((a, b) => b - a);
  this.minDelay = new Map(); // 在小根堆中要延迟删除的元素
  this.maxDelay = new Map(); // 在大根堆中要延迟删除的元素
  this.data = new Map(); // 保存时间戳和价格
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  if (
    !this.currentData.length ||
    (this.currentData.length && this.currentData[0] <= timestamp)
  ) {
    this.currentData = [timestamp, price];
  }
  if (this.data.has(timestamp)) {
    // 更新
    const oldPrice = this.data.get(timestamp);
    this.minDelay.set(oldPrice, (this.minDelay.get(oldPrice) || 0) + 1);
    this.maxDelay.set(oldPrice, (this.maxDelay.get(oldPrice) || 0) + 1);
    this.deleteDelay();
  }
  this.data.set(timestamp, price);
  this.minHeap.insert(price);
  this.maxHeap.insert(price);
};
/**
 * @description 延迟删除
 */
StockPrice.prototype.deleteDelay = function () {
  while (!this.minHeap.isEmpty() && this.minDelay.has(this.minHeap.peek())) {
    const minV = this.minHeap.poll();
    const num = this.minDelay.get(minV);
    if (num === 1) this.minDelay.delete(minV);
    else this.minDelay.set(minV, num - 1);
  }
  while (!this.maxHeap.isEmpty() && this.maxDelay.has(this.maxHeap.peek())) {
    const maxV = this.maxHeap.poll();
    const num = this.maxDelay.get(maxV);
    if (num === 1) this.maxDelay.delete(maxV);
    else this.maxDelay.set(maxV, num - 1);
  }
};
/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.currentData[1];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  return this.maxHeap.peek();
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  return this.minHeap.peek();
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
