/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-27 14:20:23                                                  *
 * @LastModifiedDate: 2023-12-27 17:24:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，请你返回 非空 子序列元素和的最大值，子序列需要满足：子序列中每两个 相邻 的整数 nums[i] 和 nums[j] ，它们在原数组中的下标 i 和 j 满足 i < j 且 j - i <= k 。

// 数组的子序列定义为：将数组中的若干个数字删除（可以删除 0 个数字），剩下的数字按照原本的顺序排布。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  // k表示可以跳跃的最大步数，
  // 如果k等于1，那么子序列就是子数组
  // k > 1时，子序列任意两个元素之间间隔至少是 k-1
  // 如果使用暴力的动态规划 dp[i] 表示包含当前元素的和最大的子序列
  // 则解法如下
  const n = nums.length;
  const dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];
  let res = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i - j >= 0) dp[i] = Math.max(dp[i], nums[i], nums[i] + dp[i - j]);
      else break;
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

// 上述的答案时间复杂度为O(nk)，会超出时间限制
// 使用优先队列+窗口滑动+延迟删除可以优化算法

class PQ {
  constructor(compareFn = (a, b) => a - b, heap = []) {
    this.compareFn = compareFn;
    this.heap = heap;
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
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
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
    const size = this.size();
    let idx = size - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
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
var constrainedSubsetSum = function (nums, k) {
  // k表示可以跳跃的最大步数，
  // 如果k等于1，那么子序列就是子数组
  // k > 1时，子序列任意两个元素之间间隔至少是 k-1
  // 如果使用暴力的动态规划 dp[i] 表示包含当前元素的和最大的子序列
  // 则解法如下
  const n = nums.length;
  const dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];
  let res = dp[0];
  const pq = new PQ((a, b) => b - a);
  pq.insert(nums[0]);
  const delay = new Map();
  for (let i = 1; i < n; i++) {
    // 记录可以延迟删除的dp[i-k-1]
    if (i - k - 1 >= 0) {
      delay.set(dp[i - k - 1], (delay.get(dp[i - k - 1]) | 0) + 1);
    }
    // 进行删除操作
    while (delay.has(pq.peek())) {
      const cur = pq.poll();
      const num = delay.get(cur);
      if (num === 1) delay.delete(cur);
      else delay.set(cur, num - 1);
    }
    // 计算最大值
    dp[i] = Math.max(nums[i], nums[i] + pq.peek());
    pq.insert(dp[i]);
    res = Math.max(res, dp[i]);
  }
  return res;
};
