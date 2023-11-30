/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-30 16:10:24                                                  *
 * @LastModifiedDate: 2023-11-30 17:29:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

class Q {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest];
  }
  enqueue(...eles) {
    for (const ele of eles) this.items[this.lowest + this.count++] = ele;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowest++];
    this.count--;
    return res;
  }
}

class PQ {
  constructor(compareFn = (a, b) => a - b, heap = []) {
    this.heap = heap;
    this.compare = compareFn;
  }
  compareFn(a, b) {
    return this.compare(this.heap[a], this.heap[b]);
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
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
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == undefined) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    const size = this.size();
    let idx = size - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compareFn(idx, parentIdx) < 0) {
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
    const size = this.size();
    let idx = 0;
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compareFn(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compareFn(idx, rightIdx) > 0) idx = rightIdx;
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
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 队列，优先队列，延迟删除
  const q = new Q();
  const pq = new PQ((a, b) => b - a);
  const ans = [];
  const n = nums.length;
  const delay = new Map();
  for (let i = 0; i < k; i++) {
    q.enqueue(nums[i]);
    pq.insert(nums[i]);
  }
  ans.push(pq.peek());
  for (let i = k; i < n; i++) {
    q.enqueue(nums[i]);
    const k = q.dequeue();
    delay.set(k, (delay.get(k) | 0) + 1);
    // 进行延迟删除操作
    while (delay.has(pq.peek())) {
      const delNum = pq.poll();
      const num = delay.get(delNum);
      num === 1 ? delay.delete(delNum) : delay.set(delNum, num - 1);
    }
    pq.insert(nums[i]);
    ans.push(pq.peek());
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 队列，优先队列，保存索引，每次获取结果是删除不在窗口内的peek值
  const pq = new PQ((a, b) => b[0] - a[0]);
  const ans = [];
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    pq.insert([nums[i], i]);
  }
  ans.push(pq.peek()[0]);
  for (let i = k; i < n; i++) {
    // 进行延迟删除操作
    while (pq.peek() && pq.peek()[1] <= i - k) {
      pq.poll();
    }
    pq.insert([nums[i], i]);
    ans.push(pq.peek()[0]);
  }
  return ans;
};

// 双端队列
class Dequeue {
  constructor() {
    this.items = {};
    
  }
}
