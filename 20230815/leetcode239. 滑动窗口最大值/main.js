/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-15 13:26:10                                                  *
 * @LastModifiedDate: 2023-08-15 15:21:47                                      *
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
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
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
  shiftUp(defaultIdx = this.size() - 1) {
    let idx = defaultIdx;
    let parentIdx = this.getParentIdx(idx);
    while (
      idx > 0 &&
      this.compareFn(this.heap[idx], this.heap[parentIdx]) < 0
    ) {
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
  shiftDown(defaultIdx = 0) {
    let idx = defaultIdx;
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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 传入优先队列的值是一个数组对
  const heap = new MinHeap((a, b) => b[0] - a[0]);
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    heap.insert([nums[i], i]);
  }
  let res = [heap.peek()[0]];
  for (let i = k; i < n; i++) {
    heap.insert([nums[i], i]);
    // 当前值peek的值可能不在滑动窗口中
    while (heap.peek()[1] <= i - k) {
      // 当前最大值的索引在滑动窗口的左边就要删掉
      heap.poll();
    }
    res.push(heap.peek()[0]);
  }
  return res;
};

class Deque {
  constructor() {
    this.front = -1;
    this.tail = 0;
    this.items = {};
  }
  size() {
    return this.tail - this.front - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  addFront(value) {
    if (value == null) return false;
    this.items[this.front--] = value;
    return this.size(); // 返回队列长度
  }
  addTail(value) {
    if (value == null) return false;
    this.items[this.tail++] = value;
    return this.size();
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.front + 1];
  }
  peekTail() {
    if (this.isEmpty()) return undefined;
    return this.items[this.tail - 1];
  }
  pollFront() {
    if (this.isEmpty()) return undefined;
    let removeValue = this.items[++this.front];
    delete this.items[this.front];
    return removeValue;
  }
  pollTail() {
    if (this.isEmpty()) return undefined;
    let removeValue = this.items[--this.tail];
    delete this.items[this.tail];
    return removeValue;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 单调队列
  const deque = new Deque();
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    while (!deque.isEmpty() && nums[deque.peekTail()] < nums[i]) {
      deque.pollTail();
    }
    deque.addTail(i);
  }
  const res = [nums[deque.peekFront()]];
  for (let i = k; i < n; i++) {
    while (!deque.isEmpty() && nums[deque.peekTail()] < nums[i]) {
      deque.pollTail();
    }
    deque.addTail(i);
    // 当前值peek的值可能不在滑动窗口中
    while (deque.peekFront() <= i - k) {
      // 当前最大值的索引在滑动窗口的左边就要删掉
      deque.pollFront();
    }
    res.push(nums[deque.peekFront()]);
  }
  return res;
};
