/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-25 14:45:26                                                  *
 * @LastModifiedDate: 2023-08-25 16:22:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。nums 的一个子数组如果满足以下条件，那么它是 不间断 的：

// i，i + 1 ，...，j  表示子数组中的下标。对于所有满足 i <= i1, i2 <= j 的下标对，都有 0 <= |nums[i1] - nums[i2]| <= 2 。
// 请你返回 不间断 子数组的总数目。

// 子数组是一个数组中一段连续 非空 的元素序列。

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  _getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  _getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  _getRightIdx(idx) {
    return idx * 2 + 2;
  }
  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  _compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]) > 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this._shiftUp();
    return true;
  }
  _shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this._getParentIdx(idx);
    while (idx > 0 && this._compare(parentIdx, idx)) {
      this._swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this._getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this._swap(0, this.size() - 1);
    const removeValue = this.heap.pop();
    this._shiftDown();
    return removeValue;
  }
  _shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this._getLeftIdx(idx);
      const rightIdx = this._getRightIdx(idx);
      if (leftIdx < size && this._compare(idx, leftIdx)) idx = leftIdx;
      if (rightIdx < size && this._compare(idx, rightIdx)) idx = rightIdx;
      if (idx !== temp) {
        this._swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  // 也就是子数组中的最大值和最小值不能相差超过2
  // 用两个优先队列存储升序和降序的滑动窗口数据
  // 窗口要不断右移直到最大值和最小值差值超过2
  // 此时从窗口左边缩小窗口，也就是从两个优先队列中移除值
  // 如果移除的值不是最大值或者最小值，可以延迟删除，但是要将被删除的值存储在字典中
  // 然后判断字典中是否存在优先队列中的最小值或最大值，然后执行延迟删除操作
  const n = nums.length;
  let left = 0;
  const maxDelay = new Map();
  const minDelay = new Map();
  const maxHeap = new MinHeap((a, b) => b - a);
  const minHeap = new MinHeap();
  let res = 0;
  const helpDelete = () => {
    // 延迟删除
    while (maxDelay.has(maxHeap.peek())) {
      let cur = maxHeap.poll();
      const num = maxDelay.get(cur);
      maxDelay.set(cur, num - 1);
      if (num === 1) maxDelay.delete(cur);
    }
    while (minDelay.has(minHeap.peek())) {
      let cur = minHeap.poll();
      const num = minDelay.get(cur);
      minDelay.set(cur, num - 1);
      if (num === 1) minDelay.delete(cur);
    }
  };
  for (let i = 0; i < n; i++) {
    maxHeap.insert(nums[i]);
    minHeap.insert(nums[i]);
    if (maxHeap.peek() - minHeap.peek() <= 2) res += i - left + 1;
    else {
      // 左移删除操作
      while (left < i) {
        const cur = nums[left];
        if (cur === maxHeap.peek()) maxHeap.poll();
        else maxDelay.set(cur, (maxDelay.get(cur) | 0) + 1);
        if (cur === minHeap.peek()) minHeap.poll();
        else minDelay.set(cur, (minDelay.get(cur) | 0) + 1);
        helpDelete();
        left++;
        if (maxHeap.peek() - minHeap.peek() <= 2) {
          res += i - left + 1;
          break;
        }
      }
    }
  }
  return res;
};



