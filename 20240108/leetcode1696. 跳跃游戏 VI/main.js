// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 一开始你在下标 0 处。每一步，你最多可以往前跳 k 步，但你不能跳出数组的边界。也就是说，你可以从下标 i 跳到 [i + 1， min(n - 1, i + k)] 包含 两个端点的任意位置。

// 你的目标是到达数组最后一个位置（下标为 n - 1 ），你的 得分 为经过的所有数字之和。

// 请你返回你能得到的 最大得分 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  // 暴力解法，跳到nums[i]的最大得分为dp[i]，会超时
  const n = nums.length;
  let dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= Math.max(0, i - k); j--) {
      dp[i] = Math.max(dp[i], dp[j] + nums[i]);
    }
  }
  return dp[n - 1];
};

// 使用单调队列保存dp

class Dqueue {
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
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
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
  // 暴力解法，跳到nums[i]的最大得分为dp[i]，会超时
  const n = nums.length;
  let dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];
  const dq = new Dqueue();
  dq.enqueueBack(0);
  for (let i = 1; i < n; i++) {
    while (!dq.isEmpty() && dq.peekFront() < i - k) {
      dq.dequeueFront();
    }
    dp[i] = dp[dq.peekFront()] + nums[i];
    while (!dq.isEmpty() && dp[dq.peekBack()] <= dp[i]) {
      dq.dequeueBack();
    }
    dq.enqueueBack(i);
  }
  return dp[n - 1];
};
