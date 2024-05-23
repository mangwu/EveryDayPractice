/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-23 09:22:31                                                  *
 * @LastModifiedDate: 2024-05-23 10:34:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 如果子数组中所有元素都相等，则认为子数组是一个 等值子数组 。注意，空数组是 等值子数组 。

// 从 nums 中删除最多 k 个元素后，返回可能的最长等值子数组的长度。

// 子数组 是数组中一个连续且可能为空的元素序列。

class DQueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueueFront(val) {
    this.items[this.lowest--] = val;
  }
  enqueueBack(val) {
    this.items[this.highest++] = val;
  }
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.highest - 1];
  }
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    hash.has(nums[i]) ? hash.get(nums[i]).push(i) : hash.set(nums[i], [i]);
  }
  let res = 1;
  for (const [num, arr] of hash) {
    const win = new DQueue();
    for (const item of arr) {
      win.enqueueBack(item);
      while (
        !win.isEmpty() &&
        win.peekBack() - win.peekFront() + 1 - win.size() > k
      ) {
        win.dequeueFront();
      }
      res = Math.max(res, win.size());
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    hash.has(nums[i]) ? hash.get(nums[i]).push(i) : hash.set(nums[i], [i]);
  }
  let res = 1;
  for (const [num, arr] of hash) {
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
      // 当前arr[right]被选中
      while (arr[right] - arr[left] + 1 - (right - left + 1) > k) left++;
      res = Math.max(res, right - left + 1);
    }
  }
  return res;
};
