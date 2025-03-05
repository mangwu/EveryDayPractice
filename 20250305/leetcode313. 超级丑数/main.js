/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 15:38:41                                                  *
 * @LastModifiedDate: 2025-03-05 16:43:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。

// 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。

// 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    return this.items[0];
  }
  insert(value) {
    this.items.push(value);
    this.shiftUp();
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    let size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      while (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      while (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const pq = new PQ();
  pq.insert(1);
  let ans = 1;
  while (n) {
    ans = pq.peek();
    // 相同的数字只计算一次
    while (pq.peek() === ans) {
      pq.poll();
    }
    for (const prime of primes) {
      pq.insert(prime * ans);
    }
    n--;
  }
  return ans;
};
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const m = primes.length;
  const pointers = new Array(m + 1).fill(1);
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i] = Math.min(dp[pointers[j]] * primes[j - 1], dp[i]);
    }
    for (let j = 1; j <= m; j++) {
      if (dp[i] === dp[pointers[j]] * primes[j - 1]) pointers[j]++;
    }
  }
  return dp[n];
};
