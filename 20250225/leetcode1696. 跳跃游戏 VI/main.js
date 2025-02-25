/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 11:03:52                                                  *
 * @LastModifiedDate: 2025-02-25 11:19:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 一开始你在下标 0 处。每一步，你最多可以往前跳 k 步，但你不能跳出数组的边界。也就是说，你可以从下标 i 跳到 [i + 1， min(n - 1, i + k)] 包含 两个端点的任意位置。

// 你的目标是到达数组最后一个位置（下标为 n - 1 ），你的 得分 为经过的所有数字之和。

// 请你返回你能得到的 最大得分 。

class DQ {
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
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.highest - 1];
  }
  insertBack(value) {
    this.items[this.highest++] = value;
  }
  insertFront(value) {
    this.items[this.lowest--] = value;
  }
  pollFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  pollBack() {
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
var maxResult = function (nums, k) {
  // 单调队列
  const dq = new DQ(); // 单调递减
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dq.insertBack([0, nums[0]]);
  for (let i = 1; i < n; i++) {
    while (!dq.isEmpty() && dq.peekFront()[0] + k < i) dq.pollFront();
    const max = dq.peekFront();
    dp[i] = nums[i] + max[1];
    while (!dq.isEmpty() && dq.peekBack()[1] <= dp[i]) dq.pollBack();
    dq.insertBack([i, dp[i]]);
  }
  return dp[n - 1];
};
