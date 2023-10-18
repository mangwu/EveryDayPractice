/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-18 09:44:07                                                  *
 * @LastModifiedDate: 2023-10-18 10:39:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。

// 在一步 操作 中：

// 选出一个满足 0 <= i < nums.length 的下标 i ，
// 将你的 分数 增加 nums[i] ，并且
// 将 nums[i] 替换为 ceil(nums[i] / 3) 。
// 返回在 恰好 执行 k 次操作后，你可能获得的最大分数。

// 向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = compareFn;
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
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
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
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (idx && this.compare(idx, parentIdx) < 0) {
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
    const reV = this.heap.pop();
    this.shiftDown();
    return reV;
  }
  shiftDown() {
    let idx = 0;
    let temp = idx;
    const size = this.size();
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const heap = new MinHeap((a, b) => b - a);
  for (const num of nums) {
    heap.insert(num);
  }
  let ans = 0;
  while (k) {
    let cur = heap.poll();
    ans += cur;
    heap.insert(Math.ceil(cur / 3));
    k--;
  }
  return ans;
};

const myHeap = new MinHeap((a, b) => b - a);

myHeap.insert(8);
myHeap.insert(7);
myHeap.insert(-1);
myHeap.insert(8);
myHeap.insert(-8);
myHeap.insert(9);

console.log(myHeap.poll());
console.log(myHeap.poll());
console.log(myHeap.poll());
console.log(myHeap.poll());
console.log(myHeap.poll());
console.log(myHeap.poll());
