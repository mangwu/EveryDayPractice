/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-17 16:41:04                                                  *
 * @LastModifiedDate: 2023-08-18 14:28:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。

// 你必须找到一个内存复杂度优于 O(n2) 的解决方案。

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
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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
    let idx = this.size() - 1;
    let pIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compareFn(this.heap[idx], this.heap[pIdx]) > 0) {
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
      if (lIdx < size && this.compareFn(this.heap[idx], this.heap[lIdx]) > 0) {
        idx = lIdx;
      }
      if (rIdx < size && this.compareFn(this.heap[idx], this.heap[rIdx]) > 0) {
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
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  // 如果不考虑时间和空间复杂度，可以直接使用排序法，如下
  return matrix
    .reduce((pre, cur) => {
      pre.push(...cur);
      return pre;
    })
    .sort((a, b) => a - b)[k - 1];
};

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const heap = new MinHeap((a, b) => matrix[a[0]][a[1]] - matrix[b[0]][b[1]]);
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    heap.insert([0, i]);
  }
  while (k) {
    const cur = heap.poll();
    let curValue = matrix[cur[0]][cur[1]];
    if (cur[0] < m - 1) {
      cur[0]++;
      heap.insert(cur);
    }
    k--;
    if (k === 0) return curValue;
  }
};

// 4 3 5 2 9
//   4   5

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  const check = (mid) => {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
      if (matrix[i][j] <= mid) {
        num += i + 1;
        j++;
      } else {
        i--;
      }
    }
    return num >= k;
  };
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left < right) {
    let mid = (left + right) >> 1;
    const checkRes = check(mid);
    if (checkRes) {
      // 数字过大
      right = mid;
    } else {
      // 数字过小
      left = mid + 1;
    }
  }
  return left;
};
