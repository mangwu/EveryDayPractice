/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-12 10:01:46                                                  *
 * @LastModifiedDate: 2023-12-12 17:02:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的非负整数数组 nums 。对于 nums 中每一个整数，你必须找到对应元素的 第二大 整数。

// 如果 nums[j] 满足以下条件，那么我们称它为 nums[i] 的 第二大 整数：

// j > i
// nums[j] > nums[i]
// 恰好存在 一个 k 满足 i < k < j 且 nums[k] > nums[i] 。
// 如果不存在 nums[j] ，那么第二大整数为 -1 。

// 比方说，数组 [1, 2, 4, 3] 中，1 的第二大整数是 4 ，2 的第二大整数是 3 ，3 和 4 的第二大整数是 -1 。
// 请你返回一个整数数组 answer ，其中 answer[i]是 nums[i] 的第二大整数。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.compare = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  compareFn(a, b) {
    return this.compare(this.heap[a], this.heap[b]);
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
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compareFn(idx, parentIdx) < 0) {
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
      if (leftIdx < size && this.compareFn(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compareFn(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {
  // 单调栈加优先队列
  // 在获取单调栈的过程中，我们将那些会因为保证栈单调而出栈的元素用优先队列保存起来
  // 这些出栈的元素的下一个最大值就是当前的元素，
  // 再遍历到下一个元素后，出列比较可以判断下一个元素是否是下一个第二大的元素
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const pq = new PQ((a, b) => a[0] - b[0]);
  const stack = [];
  for (let i = 0; i < n; i++) {
    // 找出以当前元素为下一个第二大的元素的元素
    while (!pq.isEmpty() && pq.peek()[0] < nums[i]) {
      res[pq.poll()[1]] = nums[i];
    }
    // 维持单调栈
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop();
      pq.insert([nums[idx], idx]);
    }
    stack.push(i);
  }
  return res;
};

const pq = new PQ();
pq.insert(2);
pq.insert(4);
pq.insert(0);
pq.insert(9);
pq.insert(6);
pq.insert(8);
pq.insert(9);
pq.insert(5);
pq.insert(4);
pq.insert(7);
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
