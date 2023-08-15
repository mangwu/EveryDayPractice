/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-15 16:42:33                                                  *
 * @LastModifiedDate: 2023-08-15 17:31:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size === 0;
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
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
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
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 多路归并
  const set = new Set([1]);
  const heap = new MinHeap();
  heap.insert(1);
  while (n) {
    const cur = heap.poll();
    n--;
    if (!set.has(cur * 2)) heap.insert(cur * 2);
    if (!set.has(cur * 3)) heap.insert(cur * 3);
    if (!set.has(cur * 5)) heap.insert(cur * 5);
    set.add(cur * 2);
    set.add(cur * 3);
    set.add(cur * 5);
    if (n === 0) return cur;
  }
};
// 1 => 1 => 2 3 5
// 2 3 5 => 2 => 4 6 10
// 3 4 5 6 10 => 3 => 6 9 15
