/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-02 22:45:57                                                  *
 * @LastModifiedDate: 2024-03-02 22:59:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 一次操作中，你将执行：

// 选择 nums 中最小的两个整数 x 和 y 。
// 将 x 和 y 从 nums 中删除。
// 将 min(x, y) * 2 + max(x, y) 添加到数组中的任意位置。
// 注意，只有当 nums 至少包含两个元素时，你才可以执行以上操作。

// 你需要使数组中的所有元素都大于或等于 k ，请你返回需要的 最少 操作次数。

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compare;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
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
    return this.compareFn(this.items[a], this.items[b]);
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  insert(val) {
    if (!val) return false;
    this.items.push(val);
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
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
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
var minOperations = function (nums, k) {
  const pq = new PQ();
  for (const num of nums) pq.insert(num);
  let ans = 0;
  while (!pq.isEmpty() && pq.peek() < k) {
    const x = pq.poll();
    const y = pq.poll();
    pq.insert(Math.min(x, y) * 2 + Math.max(x, y));
    ans++;
  }
  return ans;
};
