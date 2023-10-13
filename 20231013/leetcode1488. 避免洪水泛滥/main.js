/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-13 09:03:51                                                  *
 * @LastModifiedDate: 2023-10-13 10:31:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你的国家有无数个湖泊，所有湖泊一开始都是空的。当第 n 个湖泊下雨前是空的，那么它就会装满水。如果第 n 个湖泊下雨前是 满的 ，这个湖泊会发生 洪水 。你的目标是避免任意一个湖泊发生洪水。

// 给你一个整数数组 rains ，其中：

// rains[i] > 0 表示第 i 天时，第 rains[i] 个湖泊会下雨。
// rains[i] == 0 表示第 i 天没有湖泊会下雨，你可以选择 一个 湖泊并 抽干 这个湖泊的水。
// 请返回一个数组 ans ，满足：

// ans.length == rains.length
// 如果 rains[i] > 0 ，那么ans[i] == -1 。
// 如果 rains[i] == 0 ，ans[i] 是你第 i 天选择抽干的湖泊。
// 如果有多种可行解，请返回它们中的 任意一个 。如果没办法阻止洪水，请返回一个 空的数组 。

// 请注意，如果你选择抽干一个装满水的湖泊，它会变成一个空的湖泊。但如果你选择抽干一个空的湖泊，那么将无事发生。

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const set = new Set();
  const ans = [];
  const n = rains.length;
  const visited = new Array(n).fill(false);
  let j = 1;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    if (rains[i] > 0) {
      // 下雨
      if (set.has(rains[i])) return [];
      set.add(rains[i]); // 装满水
      ans[i] = -1;
    } else {
      // 遍历后续的决定一个要抽水的池塘
      if (set.size === 0) continue;
      let start = Math.max(i, j);
      while (j < n) {
        if (rains[j] > 0) {
        }
        j++;
      }
    }
  }
};
class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = compareFn;
  }
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
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
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compare(idx, parentIdx) < 0) {
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
    const removeV = this.heap.pop();
    this.shiftDown();
    return removeV;
  }
  shiftDown() {
    let size = this.size();
    let idx = 0;
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (temp !== idx) {
        this.swap(temp, idx);
        temp = idx;
      } else break;
    }
  }
}
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  // 下一个相同元素的索引
  const n = rains.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (rains[i] > 0) {
      hash.has(rains[i])
        ? hash.get(rains[i])[1].push(i)
        : hash.set(rains[i], [1, [i]]);
    }
  }
  const set = new Set();
  const ans = new Array(n).fill(-1);
  const minHeap = new MinHeap();
  for (let i = 0; i < n; i++) {
    if (rains[i] === 0) {
      if (minHeap.isEmpty()) ans[i] = 1;
      else {
        ans[i] = rains[minHeap.poll()];
        set.delete(ans[i]);
      }
    } else {
      if (set.has(rains[i])) return [];
      const info = hash.get(rains[i]);
      set.add(rains[i]);
      if (info[0] < info[1].length) minHeap.insert(info[1][info[0]++]);
    }
  }
  return ans;
};
