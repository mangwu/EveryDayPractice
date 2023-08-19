/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-16 16:36:06                                                  *
 * @LastModifiedDate: 2023-08-16 17:40:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

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
    return 2 * idx + 1;
  }
  getRightIdx(idx) {
    return 2 * idx + 2;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let pIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compareFn(this.heap[idx], this.heap[pIdx]) < 0) {
      this.swap(idx, pIdx);
      idx = pIdx;
      pIdx = this.getParentIdx(idx);
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
    let temp = idx;
    while (idx < size) {
      const lIdx = this.getLeftIdx(idx);
      const rIdx = this.getRightIdx(idx);
      if (lIdx < size && this.compareFn(this.heap[idx], this.heap[lIdx]) > 0)
        idx = lIdx;
      if (rIdx < size && this.compareFn(this.heap[idx], this.heap[rIdx]) > 0)
        idx = rIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinHeap(
    (a, b) => nums1[a[0]] + nums2[a[1]] - nums1[b[0]] - nums2[b[1]]
  );
  minHeap.insert([0, 0]);
  const m = nums1.length;
  const n = nums2.length;
  const res = [];
  const set = new Set(["0,0"]);
  while (k) {
    if (minHeap.isEmpty()) return res;
    const [idx1, idx2] = minHeap.poll();
    k--;
    res.push([nums1[idx1], nums2[idx2]]);
    // 这样做会有重复的选择
    if (idx1 < m - 1) {
      const cur = [idx1 + 1, idx2];
      if (!set.has(cur.join(","))) minHeap.insert(cur);
      set.add(cur.join(","));
    }
    if (idx2 < n - 1) {
      const cur = [idx1, idx2 + 1];
      if (!set.has(cur.join(","))) minHeap.insert(cur);
      set.add(cur.join(","));
    }
  }
  return res;
};

// [1,2,5,6,7,8,11,12,15,16]
// [3,5,6,7,8,9,11,12,15,16,17,21,22,26,28,31]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinHeap(
    (a, b) => nums1[a[0]] + nums2[a[1]] - nums1[b[0]] - nums2[b[1]]
  );
  const m = nums1.length;
  const n = nums2.length;
  for (let i = 0; i < m; i++) {
    minHeap.insert([i, 0]);
  }
  const res = [];
  // 另一种去重方式
  while (k) {
    if (minHeap.isEmpty()) return res;
    const [idx1, idx2] = minHeap.poll();
    k--;
    res.push([nums1[idx1], nums2[idx2]]);
    // 只用增加idx1
    if (idx2 < n - 1) minHeap.insert([idx1, idx2 + 1]);
  }
  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  // 优先队列
  // 保存[idx1, 0]的索引
  // 声明ans
  const ans = [];
  // 声明优先队列
  const pq = new MinHeap(
    (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]])
  );
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    pq.insert([i, 0]);
  }
  // 遍历pq出队
  while (pq.size > 0 && k-- > 0) {
    const newIdx = pq.poll();
    // 最小值进入答案
    ans.push([nums1[newIdx[0]], nums2[newIdx[1]]]);
    if (++newIdx[1] < nums2.length) {
      pq.insert(newIdx);
    }
  }
  return ans;
};
