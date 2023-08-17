/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-17 16:41:04                                                  *
 * @LastModifiedDate: 2023-08-17 17:30:38                                      *
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
