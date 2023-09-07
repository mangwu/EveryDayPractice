/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-07 09:24:28                                                  *
 * @LastModifiedDate: 2023-09-07 11:03:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 ranks ，表示一些机械工的 能力值 。ranksi 是第 i 位机械工的能力值。能力值为 r 的机械工可以在 r * n2 分钟内修好 n 辆车。

// 同时给你一个整数 cars ，表示总共需要修理的汽车数目。

// 请你返回修理所有汽车 最少 需要多少时间。

// 注意：所有机械工可以同时修理汽车。

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compare = compareFn;
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
    if (value === null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compare(this.heap[idx], this.heap[parentIdx]) < 0) {
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
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = 0;
    while (idx < size) {
      const lIdx = this.getLeftIdx(idx);
      const rIdx = this.getRightIdx(idx);
      if (lIdx < size && this.compare(this.heap[idx], this.heap[lIdx]) > 0) {
        idx = lIdx;
      }
      if (rIdx < size && this.compare(this.heap[idx], this.heap[rIdx]) > 0) {
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
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  const heap = new MinHeap((a, b) => a[0] - b[0]);
  for (const rank of ranks) {
    heap.insert([rank, 1]); // 后面一个表示当前数量
  }
  for (let i = 0; i < cars; i++) {
    const [time, num] = heap.poll();
    if (i === cars - 1) return time;
    heap.insert([(time / (num * num)) * (num + 1) * (num + 1), num + 1]);
  }
};

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let left = 1;
  let right = ranks[0] * cars * cars;
  const check = (curTime) => {
    let sum = 0;
    for (const rank of ranks) {
      sum += Math.floor(Math.sqrt(curTime / rank));
    }
    return sum >= cars; // 符合条件
  };
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
