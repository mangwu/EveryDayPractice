/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-16 09:50:23                                                  *
 * @LastModifiedDate: 2023-08-16 10:23:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

// 例如 arr = [2,3,4] 的中位数是 3 。
// 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。
// 实现 MedianFinder 类:

// MedianFinder() 初始化 MedianFinder 对象。

// void addNum(int num) 将数据流中的整数 num 添加到数据结构中。

// double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return 2 * idx + 1;
  }
  getRightIdx(idx) {
    return 2 * idx + 2;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let pIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compareFn(this.heap[idx], this.heap[pIdx]) < 0) {
      this.swap(idx, pIdx);
      idx = pIdx;
      pIdx = this.getParentIdx(idx);
    }
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
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
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const lIdx = this.getLeftIdx(idx);
      const rIdx = this.getRightIdx(idx);
      if (lIdx < size && this.compareFn(this.heap[idx], this.heap[lIdx]) > 0) {
        idx = lIdx;
      }
      if (rIdx < size && this.compareFn(this.heap[idx], this.heap[rIdx]) > 0) {
        idx = rIdx;
      }
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

var MedianFinder = function () {
  this.queMin = new MinHeap((a, b) => b - a); // 小于中位数的数，最多比queMax多一个元素
  this.queMax = new MinHeap(); // 大于中位数的数
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.queMin.isEmpty() || num <= this.queMin.peek()) {
    this.queMin.insert(num);
    while (this.queMax.size() + 1 < this.queMin.size()) {
      this.queMax.insert(this.queMin.poll());
    }
  } else {
    this.queMax.insert(num);
    while (this.queMax.size() > this.queMin.size()) {
      this.queMin.insert(this.queMax.poll());
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.queMin.size() > this.queMax.size()) {
    return this.queMin.peek();
  }
  return (this.queMax.peek() + this.queMin.peek()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
